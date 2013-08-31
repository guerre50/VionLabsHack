// View.js
// -------
define(["App", "jquery", "underscore", "backbone", "marionette", "models/Video", "text!templates/video.html"],

    function(app, $, _, Backbone, Marionette, Model, template){

        var VideoView = Backbone.Marionette.ItemView.extend({

            template: _.template(template),
            player: undefined,

            // It binds elements to Jquery
            ui: {

            },

            // View constructor
            initialize: function(options) {
                _.bindAll(this);
                
                this.model = options;
                app.vent.on('seek', this.seek);
            },

            seek: function(timestamp) {
                this.player.currentTime(timestamp);
            },

            onShow: function() {
                var self = this;

                videojs("example_video_1").ready(function(){
                    var myPlayer = this;
                    myPlayer.play();

                    self.player = myPlayer;


                    var movie_id = 1337;
                    app.firebase.child('movies/' + movie_id).on('child_added', function(input) {
                        var whereYouAt = myPlayer.currentTime();
                        var subtitles = this.getSubtitlesAt(whereYouAt);
                        // Save subtitles
                        app.firebase.child('movies/' + movie_id + '/' + input.name() + '/subtitles').set(subtitles);

                        // Some output
                        $('#realtime').append('<li>' + subtitles + '</li>');
                    });

                });
            },

            // View Event Handlers
            events: {

            },

            getSubtitlesAt: function (currentTime) {
                
            }

            // Renders the view's template to the UI
            //render: function() {}

        });


        
        // Returns the View class
        return VideoView;

    }

);