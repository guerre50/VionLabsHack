// View.js
// -------
define(["jquery", "underscore", "backbone", "marionette", "views/StudyItemView", "app"],

    function($, _, Backbone, Marionette, StudyItemView, app) {

        var StudyView = Backbone.Marionette.CollectionView.extend({
            itemView: StudyItemView,

            // The DOM Element associated with this view

            // It binds elements to Jquery
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
        return StudyView;

    }

);