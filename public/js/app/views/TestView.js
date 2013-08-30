// View.js
// -------
define(["jquery", "underscore", "backbone", "marionette", "models/Model", "text!templates/test.html"],

    function($, _, Backbone, Marionette, Model, template){

        var TestView = Backbone.Marionette.View.extend({

            template: _.template(template),

            // The DOM Element associated with this view
            el: ".example",

            // It binds elements to Jquery
            ui: {

            },

            // View constructor
            initialize: function() {

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            //render: function() {}

        });

        // Returns the View class
        return TestView;

    }

);