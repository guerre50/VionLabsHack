define(["jquery", "underscore", "backbone", "marionette", "videojs", "firebase"],

    function($, _, Backbone, Marionette, videojs, firebase){

        var App = Backbone.Marionette.Application,
            app = new App();

        app.addRegions({
            "header": "#header",
            "content": "#content",
        });

        app.addInitializer(function(options) {

        });

        videojs.options.flash.swf = "video-js.swf";

        // Connect to firebase
        app.firebase = new Firebase('https://test-vion-labs.firebaseio.com');

        // TO-DO Move to its own model
        app.colors = {
            "None": "disabled",
            "Pronunciation": "iconbar-info",
            "Quote": "iconbar-danger",
            "Vocabulary": "iconbar-success"
        };

        // Returns the View class
        return app;
    }

);