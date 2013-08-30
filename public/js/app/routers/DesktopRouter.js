// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "marionette", "App", "views/LandingView", "views/TestView"],

    function($, Backbone, Marionette, app, LandingView, TestView) {

        var DesktopRouter = Backbone.Marionette.AppRouter.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                "": "index",
                "test": "test",
                "*actions": "index"

            },

            index: function() {
                // Instantiates a new view which will render the header text to the page
                console.log(app.content);
                app.content.show(new LandingView());

            },

            Test: function() {
                app.content.show(new TestView());
            }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);