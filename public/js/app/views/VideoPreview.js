// View.js
// -------
define(["jquery", "underscore", "backbone", "App", "marionette", "models/Model", "text!templates/videopreview.html"],

    function($, _, Backbone, app, Marionette, Model, template){

        var VideoPreview = Backbone.Marionette.ItemView.extend({
            template: function(serializedModel) {
                var data = {};
                if (this.model) {
                    data =  this.model.toJSON();
                }

                return _.template(template, data);
            },

            // It binds elements to Jquery
            ui: {

            },

            // View constructor
            initialize: function() {
                _.bindAll(this);
            },

            // View Event Handlers
            events: {
                "click": "play"
            },

            play: function() {
                app.router.navigate('#videos/' + this.model.get('id'), {trigger: true});
            }

        });

        // Returns the View class
        return VideoPreview;

    }

);