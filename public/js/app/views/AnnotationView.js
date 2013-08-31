// View.js
// -------
define(["App", "jquery", "underscore", "backbone", "marionette", "models/Annotation", "text!templates/annotation.html"],

    function(app, $, _, Backbone, Marionette, Model, template){

        var AnnotationView = Backbone.Marionette.ItemView.extend({
            _playing: false,
            template: function(serializedModel) {
                var data = this.model.toJSON();
                var categoryData = this.getCategoryData(this.model.get("category"));


                data.playing = this._playing;
                data.categoryDiv = categoryData.div;
                data.categoryColor = categoryData.color;

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
                this.$('.dropdown-toggle').dropdown('toggle');
            },

            reproduce: function(play) {
                this._playing = play;
                app.vent.trigger('seek', this.model.get('time') - 7);
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