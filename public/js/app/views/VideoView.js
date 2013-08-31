// View.js
// -------
define(["App", "jquery", "underscore", "backbone", "marionette", "models/Video", "text!templates/video.html"],

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

            seek: function(timestamp) {

                console.log(timestamp);

                this.player.currentTime(timestamp);
            },

            onShow: function() {
                var self = this;
                $.getJSON('../../../movies/modernfamily.json', function(data) {
                    self.subtitle = data.cues;
                });

                videojs("example_video_1").ready(function(){
                    var myPlayer = this;
                    myPlayer.play();

                    self.player = myPlayer;

                    var movie_id = 1337;

                    app.firebase.child('videos/' + movie_id + '/annotations').on('child_added', function(input) {

                        var time = myPlayer.currentTime();
                        var subtitles = self.getSubtitlesAt(time);

                        console.log(time);
                        console.log(subtitles);

                        if(!time || typeof subtitles == 'undefined' || subtitles === []) {
                            return false;
                        }

                        // Save subtitles
                        app.firebase.child('videos/' + movie_id + '/annotations/' + input.name() + '/result').set(subtitles[0]);
                        app.firebase.child('videos/' + movie_id + '/annotations/' + input.name() + '/subtitles').set(subtitles);
                        app.firebase.child('videos/' + movie_id + '/annotations/' + input.name() + '/time').set(time);
                    });

                });


            },

            // View Event Handlers
            events: {
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
                var halfOfInterval = 2;
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
                console.log(res);
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