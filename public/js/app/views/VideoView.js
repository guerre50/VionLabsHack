// View.js
// -------
define(["App", "jquery", "underscore", "backbone", "marionette", "models/Video", "text!templates/video.html", "videojs"],

    function(app, $, _, Backbone, Marionette, Model, template){

        var VideoView = Backbone.Marionette.ItemView.extend({
            template: function(serializedModel) {
                var data = {};
                if (this.model) {
                    data =  this.model.toJSON();
                }

                return _.template(template, data);
            },

            player: undefined,
            subtitle: undefined,

            // It binds elements to Jquery
            ui: {

            },

            // View constructor
            initialize: function(options) {
                _.bindAll(this);

                this.model = options;
                app.vent.on('seek', this.seek);
                $(document).bind('keypress', this.on_keypress);
            },

            annotation_highlighter: function()
            {
                if (!this.player) return;
                $(document).trigger('render_annotations', this.player.currentTime());

                // Disable scrolling when paused
                if(this.player.paused()) {
                    return;
                }

                // Nothign to scroll to
                if(typeof $(".annotation-highlighted:first").position() == 'undefined') {
                    return;
                }
                
                $('#annotations').scrollTo('.annotation-highlighted:first', {offsetTop: 200});
            },

            seek: function(timestamp) {
                app.player.currentTime(timestamp);
            },

            onShow: function() {
                var self = this;


                $.getJSON('./movies/modernfamily.json', function(data) {
                    self.subtitle = data.cues;
                });
                var location = window.location;
                var address = location.href.substring(0, location.href.indexOf('#')) + "%23";

                // Generate QR
                var qr = "http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=" + address  + self.model.get("id") + "&chld=H|0";
                $('#example_video_1').attr('poster', qr);

                var video = videojs("example_video_1", {}, function() {
                    self.setVideo(this, self);
                });
                

            },

            setVideo: function(video, self) {
                var myPlayer = video;

                app.player = self.player = myPlayer;
                var movie_id = self.model.get("id");

                // Start loop
                setInterval(self.annotation_highlighter, 400);

                app.firebase.child('videos/' + movie_id + '/input').on('child_added', function(input) {

                    if(typeof(input.val().result) != 'undefined') {
                        return false;
                    }

                    var time = myPlayer.currentTime();
                    var subtitles = self.getSubtitlesAt(time);
                    var result = subtitles[0];

                    if(typeof(result) == 'undefined') {
                        return false;
                    }

                    // Save subtitles
                    app.firebase.child('videos/' + movie_id + '/annotations/').push({
                        'result': result,
                        'subtitles': subtitles,
                        'time': time,
                        'markers': 32,
                        'playing': false
                    });

                    app.firebase.child('videos/' + movie_id + '/input/' + input.name()).remove();
                });
            },

            // View Event Handlers
            events: {
            },

            onClose: function() {
                this.player = null;
                clearInterval(self.annotation_highlighter);
                app.player.dispose();
            },

            on_keypress: function(e) {

                // s letter
                if (e.keyCode == 83) {
                    console.log(this.player.currentTime());
                    var roundedTimeInSec = Math.round(this.player.currentTime());
                    this.getSubtitlesAt(roundedTimeInSec);
                }
            },

            getSubtitlesAt: function (intSec) {
                var halfOfInterval = 2.5;
                var start = intSec - halfOfInterval;
                var end = intSec + halfOfInterval;
                var subtitles = _.filter(this.subtitle, function(cue){
                    var startedBefore = start >= cue.startTime;
                    if (startedBefore) {
                        return (cue.endTime >= start) && (cue.endTime <= end);
                    }

                    var startedLater = start <= cue.startTime;
                    if (startedLater) {
                        var between = (cue.startTime < end) && (cue.endTime < end);
                        if (between) {
                            return true;
                        }
                        return (cue.startTime < end);
                    }
                });

                var res = _.pluck(subtitles, 'text');
                return res;
            },

            remove: function(){
                $(document).unbind('keypress', this.on_keypress);
            }

            // Renders the view's template to the UI
            //render: function() {}

        });


        
        // Returns the View class
        return VideoView;

    }

);