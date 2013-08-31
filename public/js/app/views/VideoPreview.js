// View.js
// -------
define(["jquery", "underscore", "backbone", "App", "marionette", "models/Model", "text!templates/videopreview.html"],

    function($, _, Backbone, app, Marionette, Model, template){

        var VideoPreview = Backbone.Marionette.ItemView.extend({
            maxCategory: 0,
            template: function(serializedModel) {
                var data = {};
                if (this.model) {
                    data =  this.model.toJSON();
                }
                data.users = this.random();
                data.quote = this.random();
                this.updateMax(data.quote, "Quote");
                data.vocabulary = this.random();
                this.updateMax(data.vocabulary, "Vocabulary");
                data.pronunciation = this.random();
                this.updateMax(data.pronunciation, "Pronunciation");
                data.none = this.random();
                this.updateMax(data.none, "None");

                data.categoryColor = app.colors[this.maxCategoryName];
                return _.template(template, data);
            },

            random: function() {
                return parseInt(Math.random()*10);
            },

            updateMax: function(value, id) {
                if (value > this.maxCategory) {
                    this.maxCategory = value;
                    this.maxCategoryName = id;
                }
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