// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "marionette",  "App", "views/LandingView", "views/TestView", "views/PlayerView", "views/VideosView", "views/Realtime", "models/Video", "collections/VideoCollection"],

    function($, Backbone, Marionette, app, LandingView, TestView, PlayerView, VideosView, Realtime, Video, VideoCollection) {

        var DesktopRouter = Backbone.Marionette.AppRouter.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();
                app.router = this;
            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                "": "index",
                "realtime": "realtime",
                "test": "test",
                "player": "player",
                "videos": "videos",
                "videos/:id": "videos",
                "populate": "populateDB"
                //"*actions": "index",

            },

            index: function() {
                // Instantiates a new view which will render the header text to the page
                app.content.show(new LandingView());

            },
            
            test: function() {
                app.content.show(new TestView());
            },

            player: function(id) {
                app.firebase.child('videos/'+id).once('value', function(movie) {
                    var movieVal = movie.val();
                    movieVal.id = id;
                    
                    var video = new Video(movieVal);

                    app.content.show(new PlayerView(video));
                });
            },

            videos: function(id) {
                if (id) {
                    return this.player(id);
                }
                app.videos = new VideoCollection();
                app.content.show(new VideosView({collection: app.videos}));
            },

            realtime: function() {
                app.content.show(new Realtime());
            },

            populateDB: function() {
                var movies = app.firebase.child('videos');
                movies.push({
                    title: "test",
                    preview: "http://images.fanpop.com/images/image_uploads/The-Lord-of-the-Rings-lord-of-the-rings-113099_1280_1024.jpg",
                    annotations: [
                        {
                            category: "quote",
                            reviewed: false,
                            text: "Lorem Ipsum",
                            timestamp: "1000"
                        },
                        {
                            category: "quote",
                            reviewed: false,
                            text: "Lorem Ipsum",
                            timestamp: "1000"
                        }
                    ]
                });


            }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);