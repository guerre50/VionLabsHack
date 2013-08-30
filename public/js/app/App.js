define(["jquery", "underscore", "backbone", "marionette", "videojs"],

    function($, _, Backbone, Marionette, videojs){

        var App = Backbone.Marionette.Application,
            app = new App();

        app.addRegions({
            "header": "#header",
            "content": "#content",
            "footer": "#footer"
        });

        app.addInitializer(function(options) {

        });

        videojs.options.flash.swf = "video-js.swf";

        // Returns the View class
        return app;
    }

);