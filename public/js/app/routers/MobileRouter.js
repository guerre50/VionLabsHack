// MobileRouter.js
// ---------------
define(["jquery", "backbone", "models/Model", "views/Record", "collections/Collection"],
        
    function($, Backbone, UserModel, Record, Collection) {

        var MobileRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {
                
                ":id": "movie"

            },

            index: function() {

                // Instantiates a new view which will render the header text to the page
                new Record();

            },

            movie: function() {
                new Record();
            }
    
        });

        // Returns the MobileRouter class
        return MobileRouter;

    }

);