// View.js
// -------
define(["App", "jquery", "underscore", "backbone", "marionette", "models/Annotation", "text!templates/annotation.html"],

    function(app, $, _, Backbone, Marionette, Model, template){

        var AnnotationView = Backbone.Marionette.ItemView.extend({
            _playing: false,
            _current_time: 123,
            template: function(serializedModel) {
                var data = this.model.toJSON();

                data.playing = this._playing;
                data.current_time = this._current_time;

                return _.template(template, data);
            },

            ui: {
            },

            // View constructor
            initialize: function() {
                _.bindAll(this);

                var self = this;
                $(document).on('render_annotations', function(e, time) {
                    self._current_time = time;
                    self.render();
                });
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

                if(play) {
                    app.player.play();
                    app.vent.trigger('seek', this.model.get('time') - 4);
                } else {
                    app.player.pause();
                }

                this._playing = play;

                this.render();
            }

        });

        // Returns the View class
        return AnnotationView;

    }

);