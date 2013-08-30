// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "marionette",  "App", "views/LandingView", "views/TestView", "views/PlayerView", "views/Realtime", "models/Video"],

    function($, Backbone, Marionette, app, LandingView, TestView, PlayerView, Realtime, Video) {

        var DesktopRouter = Backbone.Marionette.AppRouter.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                "": "index",
                "realtime": "realtime",
                "test": "test",
                "player": "player"
                //"*actions": "index",

            },

            index: function() {
                // Instantiates a new view which will render the header text to the page
                app.content.show(new LandingView());

            },
            
            test: function() {
                app.content.show(new TestView());
            },

            player: function() {
                var video = new Video();
                app.content.show(new PlayerView(video));
                //app.vent.trigger('play', video);
            },

            realtime: function() {
                app.content.show(new Realtime());
            }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);