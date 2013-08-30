// View.js
// -------
define(["jquery", "underscore", "backbone", "marionette", "views/AnnotationView"],

    function($, _, Backbone, Marionette, AnnotationView) {

        var AnnotationsView = Backbone.Marionette.CollectionView.extend({
            itemView: AnnotationView,

            // The DOM Element associated with this view

            // It binds elements to Jquery
            ui: {

            },

            // View constructor
            initialize: function() {

            },

            onShow: function() {
            },

            // View Event Handlers
            events: {

            },

        });

        // Returns the View class
        return AnnotationsView;

    }

);