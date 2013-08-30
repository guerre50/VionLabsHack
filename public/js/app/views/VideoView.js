// View.js
// -------
define(["jquery", "underscore", "backbone", "marionette", "models/Video", "text!templates/video.html"],

    function($, _, Backbone, Marionette, Model, template){

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

        // Returns the View class
        return VideoView;

    }

);