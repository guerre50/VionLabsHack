// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "marionette", "App", "views/LandingView", "views/TestView", "views/TodosView", "views/Realtime"],

    function($, Backbone, Marionette, app, LandingView, TestView, TodosView, Realtime) {

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
                "todos": "todos",
                "*actions": "index"

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

            realtime: function() {
                app.content.show(new Realtime());
            }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);