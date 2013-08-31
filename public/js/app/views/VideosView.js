// View.js
// -------
define(["jquery", "underscore", "backbone", "marionette", "views/VideoPreview"],

    function($, _, Backbone, Marionette, VideoPreview) {

        var VideosView = Backbone.Marionette.CollectionView.extend({
            itemView: VideoPreview,
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
        return VideosView;
    }

);