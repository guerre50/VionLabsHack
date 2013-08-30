// View.js
// -------
define(["jquery", "underscore", "backbone", "marionette", "models/Annotation", "text!templates/annotation.html"],

    function($, _, Backbone, Marionette, Model, template){

        var AnnotationView = Backbone.Marionette.ItemView.extend({
            _playing: false,
            template: function(serializedModel) {
                var data = this.model.toJSON();
                data.playing = this._playing;

                return _.template(template, data);
            },

            ui: {
            },

            // View constructor
            initialize: function() {
                _.bindAll(this);
            },

            // View Event Handlers
            events: {
                "click .play": "play",
                "click .stop": "stop"
            },

            play: function() {
                this.reproduce(true);
            },

            stop: function() {
                this.reproduce(false);
            },

            reproduce: function(play) {
                this._playing = play;
                this.render();
            }

        });

        // Returns the View class
        return AnnotationView;

    }

);