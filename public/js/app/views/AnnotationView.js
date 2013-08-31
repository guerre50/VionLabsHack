// View.js
// -------
define(["App", "jquery", "underscore", "backbone", "marionette", "models/Annotation", "text!templates/annotation.html"],

    function(app, $, _, Backbone, Marionette, Model, template){

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
                app.vent.trigger('seek', this.model.get('time') - 7);
                this.render();
            }

        });

        // Returns the View class
        return AnnotationView;

    }

);