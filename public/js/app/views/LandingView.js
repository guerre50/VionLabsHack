// View.js
// -------
define(["jquery", "underscore", "backbone", "marionette", "models/Model", "text!templates/landing.html"],

    function($, _, Backbone, Marionette, Model, template){

        var LandingView = Backbone.Marionette.ItemView.extend({

            template: _.template(template),
            className: "hola",

            // The DOM Element associated with this view

            // It binds elements to Jquery
            ui: {

            },

            // View constructor
            initialize: function() {
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
        return LandingView;

    }

);