// View.js
// -------
define(["jquery", "underscore", "backbone", "marionette", "models/Model", "text!templates/realtime.html"],

    function($, _, Backbone, Marionette, Model, template){

        var Realtime = Backbone.Marionette.ItemView.extend({

            template: _.template(template),
            className: "hola",

            // The DOM Element associated with this view

            // It binds elements to Jquery
            ui: {
                pepe: "#pepe"
            },

            // View constructor
            initialize: function() {
            },

            // View Event Handlers
            events: {

            },

            onShow: function() {

                // Connect to firebase
                window.firebase = new Firebase('https://vionlabshack.firebaseio.com');

                // Subscribe on changes to the movie with id 1337
                window.firebase.child('movies/1337').on('child_added', function(input) {

                    // Find the subtitles of this position in the movie
                    var subtitles = "Benny, Do you think my tits are baggy?";

                    // Save subtitles
                    window.firebase.child('movies/1337/' + input.name() + '/subtitles').set(subtitles);

                    // Some output
                    $('#realtime').append('<li>' + input.name() + ' - ' + input.val().timestamp + ' (' + subtitles + ')' + '</li>');
                });
            },

            templateHelpers: {
            },

            remove: function() {

            }

            // Renders the view's template to the UI
            //render: function() {}

        });

        // Returns the View class
        return Realtime;

    }

);