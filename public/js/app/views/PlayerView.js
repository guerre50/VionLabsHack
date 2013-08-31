// View.js
// -------
define(["jquery", "underscore", "App", "backbone", "marionette", "text!templates/player.html", "views/VideoView", "views/AnnotationsView", "collections/AnnotationCollection", "models/Video"],

    function($, _, app, Backbone, Marionette, template, VideoView, AnnotationsView, AnnotationCollection, Video){

        var PlayerView = Backbone.Marionette.Layout.extend({
            template: _.template(template),
            movie: undefined,

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
                if (this.movie) {
                    this.video.show(new VideoView(this.movie));
                    
                    // Moviw id hack
                    app.movieId = this.movie.get("id");
                    this.annotations.show(new AnnotationsView({"collection": new AnnotationCollection()}));
                }
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