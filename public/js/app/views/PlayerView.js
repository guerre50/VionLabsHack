// View.js
// -------
define(["jquery", "underscore", "App", "backbone", "marionette", "text!templates/player.html", "views/VideoView", "views/AnnotationsView", "models/Video"],

    function($, _, app, Backbone, Marionette, template, VideoView, AnnotationsView, Video){

        var PlayerView = Backbone.Marionette.Layout.extend({
            template: _.template(template),
            movie: new Video(),

            // It binds elements to Jquery
            ui: {

            },

            // View constructor
            initialize: function(movie) {
                _.bindAll(this);
                this.movie = movie;
                app.vent.on('play', this.play);
            },

            onShow: function() {
                this.video.show(new VideoView(this.movie));
                this.annotations.show(new AnnotationsView({collection: this.movie.get("annotations")}));
            },

            play: function(movie) {
                this.movie = movie;
                this.render();
            },

            // View Event Handlers
            events: {

            },

            regions: {
                video: "#video",
                annotations: "#annotations"
            }

            // Renders the view's template to the UI
            //render: function() {}

        });

        // Returns the View class
        return PlayerView;

    }

);