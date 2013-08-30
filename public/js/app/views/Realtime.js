// View.js
// -------
define(["jquery", "underscore", "backbone", "marionette", "firebase", "models/Model", "text!templates/realtime.html"],

    function($, _, Backbone, Marionette, firebase, Model, template){

        var Realtime = Backbone.Marionette.ItemView.extend({

            template: _.template(template),

            initialize: function() {
            },

            onShow: function() {

                // Connect to firebase
                window.firebase = new Firebase('https://vionlabshack.firebaseio.com');

                var movie_id = 1337;

                // Subscribe on changes to the movie with id 1337
                window.firebase.child('movies/' + movie_id).on('child_added', function(input) {

                    // Find the subtitles of this position in the movie
                    var subtitles = "Benny, Do you think my tits are baggy?";

                    // Save subtitles
                    window.firebase.child('movies/' + movie_id + '/' + input.name() + '/subtitles').set(subtitles);

                    // Some output
                    $('#realtime').append('<li>' + subtitles + '</li>');
                });

                // Generate QR
                var qr = "http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http%3A//10.0.1.57:8001/%23" + movie_id + "&chld=H|0";
                $('#qr img').attr('src', qr);
            }

        });

        // Returns the View class
        return Realtime;

    }

);