// View.js
// -------
define(["jquery", "underscore", "backbone", "marionette", "App", "text!templates/desktopheader.html"],

    function($, _, Backbone, Marionette, app, template){

        var DesktopHeader = Backbone.Marionette.ItemView.extend({
            template: _.template(template),

            events: {
                "click .movies" : "movies"
            },

            movies: function() {
                app.router.navigate("#videos", {trigger: true});
            }
        });

        // Returns the View class
        return DesktopHeader;
    }

);