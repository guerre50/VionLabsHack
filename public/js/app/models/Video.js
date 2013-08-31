// Model.js
// --------
define(["jquery", "backbone", "App","collections/AnnotationCollection", "models/Annotation"],

    function($, Backbone, app, AnnotationCollection, Annotation) {

        // Creates a new Backbone Model class object
        var Video = Backbone.Model.extend({

            // Model Constructor
            initialize: function(config) {
                //this.set("annotations", new AnnotationCollection({video: this.get("id"), collection: this.get("annotations")}));
            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });

        // Returns the Model class
        return Video;

    }

);
