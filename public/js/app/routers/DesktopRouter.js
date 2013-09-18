// DesktopRouter.js
// ----------------
define(["jquery", "backbone", "marionette",  "App", "views/LandingView", "views/TestView", "views/PlayerView", "views/VideosView", "views/Realtime", "models/Video", "collections/VideoCollection", "views/DesktopHeader", "views/DesktopFooter", "views/StudyView", "collections/AnnotationCollection", "views/DictView", "models/Model"],

    function($, Backbone, Marionette, app, LandingView, TestView, PlayerView, VideosView, Realtime, Video, VideoCollection, DesktopHeader, DesktopFooter, StudyView, AnnotationCollection, DictView, Model) {

        var DesktopRouter = Backbone.Marionette.AppRouter.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();
                app.router = this;
                this.setDesktopTemplates();
            },

            // All of your Backbone Routes (add more)
            routes: {
                "": "videos",
                "realtime": "realtime",
                "test": "test",
                "player": "player",
                "videos": "videos",
                "videos/:id": "videos",
                "videos/": "videos",
                "study/:id": "study",
                "dict/:word": "dictionary",
                "populate": "populateDB"
                //"*actions": "index",

            },

            setDesktopTemplates: function() {
                //app.footer.show(new DesktopFooter());
                //app.header.show(new DesktopHeader());
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

            study: function(id) {
                if (id) {
                    app.movieId = id;
                    app.content.show(new StudyView({"collection":new AnnotationCollection()}));
                }
            },

            dictionary: function(word){
                var url = "http://glosbe.com/gapi/translate?from=eng&dest=eng&tm=true&pretty=true&format=json&phrase=" + word + "&callback=?";
                $.getJSON(url, function(data){
                    var m = new Model({"word": data});
                    app.content.show(new DictView(m));
                });
                
            },

            realtime: function() {
                app.content.show(new Realtime());
            },

            populateDB: function() {
                var movies = app.firebase.child('videos/1337');
                movies.set({
                    title: "Modern Family",
                    preview: "http://ia.media-imdb.com/images/M/MV5BODI1NzEzNTMxM15BMl5BanBnXkFtZTcwODc2NTk4Mg@@._V1._SX535_SY713_.jpg",
                    /*annotations: [
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
                    ]*/
                    annotations: []
                });

                var movie2 = app.firebase.child('videos/1338');
                movie2.set({
                    title: "Monsters",
                    preview: "http://ia.media-imdb.com/images/M/MV5BMjE4MzMyNjExMl5BMl5BanBnXkFtZTcwMzI5NjM3Mw@@._V1._SX640_SY948_.jpg",
                    annotations: []
                });

                var movie3 = app.firebase.child('videos/1339');
                movie3.set({
                    title: "16 Blocks",
                    preview: "http://ia.media-imdb.com/images/M/MV5BMTQ1NDEwMzEwMl5BMl5BanBnXkFtZTcwNzM4MTEzMw@@._V1._SX640_SY946_.jpg",
                    annotations: []
                });

                var movie4 = app.firebase.child('videos/1340');
                movie4.set({
                    title: "Expendables",
                    preview: "http://ia.media-imdb.com/images/M/MV5BNTUwODQyNjM0NF5BMl5BanBnXkFtZTcwNDMwMTU1Mw@@._V1._SX640_SY949_.jpg",
                    annotations: []
                });
            }

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);