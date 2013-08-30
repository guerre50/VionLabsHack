define(["jquery", "underscore", "backbone", "marionette"],

    function($, _, Backbone, Marionette){

        var App = Backbone.Marionette.Application,
            app = new App();

        app.addRegions({
            "header": "#header",
            "content": "#content",
            "footer": "#footer",
            "modal": "#modal"
        });

        app.addInitializer(function(options) {

        });

        // Returns the View class
        return app;
    }

);