// View.js
// -------
define(["jquery", "underscore", "backbone", "marionette", "views/AnnotationView"],

    function($, _, Backbone, Marionette, AnnotationView) {

        var AnnotationsView = Backbone.Marionette.CollectionView.extend({
            itemView: AnnotationView,
            ui: {

            },

            // View constructor
            initialize: function() {
            },

            onShow: function() {
            },

            events: {

            }

        });

        // Returns the View class
        return AnnotationsView;

    }

);