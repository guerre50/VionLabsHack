// View.js
// -------
define(["jquery", "underscore", "backbone", "marionette", "models/Annotation", "text!templates/annotation.html"],

    function($, _, Backbone, Marionette, Model, template){

        var AnnotationView = Backbone.Marionette.ItemView.extend({
            template: _.template(template),

            // It binds elements to Jquery
            ui: {

            },

            // View constructor
            initialize: function() {

            },

            // View Event Handlers
            events: {

            },

        });

        // Returns the View class
        return AnnotationView;

    }

);