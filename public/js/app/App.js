define(["jquery", "underscore", "backbone", "marionette", "videojs", "firebase"],

    function($, _, Backbone, Marionette, videojs, firebase){

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

        // Connect to firebase
        app.firebase = new Firebase('https://test-vion-labs.firebaseio.com');

        // Returns the View class
        return app;
    }

);