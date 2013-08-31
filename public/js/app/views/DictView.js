define(["jquery", "underscore", "backbone", "marionette", "models/Model", "text!templates/dict.html"],

    
    function($, _, Backbone, Marionette, Model, template){

        var DictView = Backbone.Marionette.ItemView.extend({

            template: function(serializedModel) {
                var data = {};
                if (this.model) {
                    data =  this.model.toJSON();
                }
                console.log(data);
                return _.template(template, data);
            },
            id: "studyList",

            // The DOM Element associated with this view

            // It binds elements to Jquery
            ui: {
            },

            // View constructor
            initialize: function(word) {
                console.log("here");
                this.model = word;
                console.log(this.model);
                _.bindAll(this);
            },

            // View Event Handlers
            events: {

            },

            onShow: function() {
            },

            templateHelpers: {
              something: function(){
                return "Do stuff with " + this.name + " because it's awesome.";
              }
            },

            remove: function() {

            }

            // Renders the view's template to the UI
            //render: function() {}

        });

        // Returns the View class
        return DictView;

    }

);
