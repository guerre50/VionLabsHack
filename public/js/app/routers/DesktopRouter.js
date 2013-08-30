// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "marionette", "App", "views/LandingView", "views/TestView", "views/TodosView", "views/PlayerView", "models/Video"],

    function($, Backbone, Marionette, app, LandingView, TestView, TodosView, PlayerView, Video) {

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
                "player": "player",
                "todos": "todos",
                //"*actions": "index",

            },

            index: function() {
                // Instantiates a new view which will render the header text to the page
                app.content.show(new LandingView());

            },

            todos: function() {
                app.content.show(new TodosView());
            },
            
            test: function() {
                app.content.show(new TestView());
            },

            player: function() {
                var video = new Video();
                app.content.show(new PlayerView(video));
                //app.vent.trigger('play', video);
            }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);