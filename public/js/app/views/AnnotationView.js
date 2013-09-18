// View.js
// -------
define(["App", "jquery", "underscore", "backbone", "marionette", "models/Annotation", "text!templates/annotation.html"],

    function(app, $, _, Backbone, Marionette, Model, template){

        var AnnotationView = Backbone.Marionette.ItemView.extend({
            _playing: false,
            _current_time: 123,
            template: function(serializedModel) {
                var data = this.model.toJSON();
                var categoryData = this.getCategoryData(this.model.get("category"));
                data.categoryDiv = categoryData.div;
                data.categoryColor = categoryData.color;
                data.playing = this._playing;
                data.current_time = this._current_time;

                return _.template(template, data);
            },

            ui: {
                annotationDiv: ".annotation-div",
                playingIcon: ".playing-icon"
            },

            // View constructor
            initialize: function() {
                _.bindAll(this);

                var self = this;
                $(document).on('render_annotations', function(e, time) {
                    self._current_time = time;
                    self.renderWithoutRestart();
                });
            },

            renderWithoutRestart: function() {
                var time = this.model.get("time"),
                    currentTime = this._current_time, 
                    highlighted = (typeof(time) != 'undefined' && currentTime < time + 1 && currentTime > time-3.5);

                
                this.ui.annotationDiv.toggleClass("annotation-highlighted", highlighted);
                if (!this._playing) {
                    this.ui.playingIcon[0].className ="playing-icon fui-play non-selectable play";
                } else {
                    this.ui.playingIcon[0].className = "playing-icon fui-pause non-selectable stop";
                }
            },

            // View Event Handlers
            events: {
                "click .play": "play",
                "click .stop": "stop",
                "click .category-selector": "selectCategory"
            },

            selectCategory: function(_category) {
                var category = $(_category.target).filter(".category").attr("title");
                this.model.set("category", category);
                this.render();
            },

            play: function() {
                this.reproduce(true);

                return false;
            },

            stop: function() {
                this.reproduce(false);

                return false;
            },

            onRender: function() {
                //this.$('.dropdown-toggle').dropdown('toggle');
            },

            reproduce: function(play) {
                if(play) {
                    app.player.play();
                    app.vent.trigger('seek', this.model.get('time') - 4);
                } else {
                    app.player.pause();
                }

                this._playing = play;
                this.renderWithoutRestart();
            },

            onClose: function() {
                $(document).off('render_annotations');
            },

            getCategoryData: function(category) {
                var color,
                    div;

                switch (category) {
                    case "Vocabulary": 
                        color = "iconbar-success";
                        div = "<span title='Vocabulary' class='category Vocabulary fui-search'></span>";
                        break;
                    case "Quote":
                        color = "iconbar-danger";
                        div = "<span title='Quote' class='category quote fui-heart'></span>";

                        break;
                    case "Pronunciation":
                        color = "iconbar-info";
                        div = "<span title='Pronunciation' class='category Pronunciation fui-volume'></span>";

                        break;
                    default:
                        color = "disabled"; 
                        div = "<span title='None' class='category None fui-new'></span>";
                }

                return {
                    "color": color,
                    "div": div
                }
            }
        });

        // Returns the View class
        return AnnotationView;

    }

);