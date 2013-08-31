// View.js
// -------
define(["app", "jquery", "underscore", "backbone", "marionette", "models/Video", "text!templates/video.html"],

    function(app, $, _, Backbone, Marionette, Model, template){

        var VideoView = Backbone.Marionette.ItemView.extend({

            template: _.template(template),

            // It binds elements to Jquery
            ui: {

            },

            // View constructor
            initialize: function(options) {
                this.model = options;

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            //render: function() {}

        });


        videojs("example_video_1").ready(function(){
            var myPlayer = this;
            myPlayer.play();

            var movie_id = 1337;
            app.firebase.child('movies/' + movie_id).on('child_added', function(input) {
                var whereYouAt = myPlayer.currentTime();
                var subtitles = getSubtitlesAt(whereYouAt);
                // Save subtitles
                window.firebase.child('movies/' + movie_id + '/' + input.name() + '/subtitles').set(subtitles);

                // Some output
                $('#realtime').append('<li>' + subtitles + '</li>');
            });

        });

        function getSubtitlesAt(currentTime) {
            
        }
        // Returns the View class
        return VideoView;

    }

);