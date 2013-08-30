// Model.js
// --------
define(["jquery", "backbone", "collections/AnnotationCollection", "models/Annotation"],

    function($, Backbone, AnnotationCollection, Annotation) {

        // Creates a new Backbone Model class object
        var Video = Backbone.Model.extend({

            // Model Constructor
            initialize: function() {
            },

            // Default values for all of the Model attributes
            defaults: {
                title: "",
                preview: "",
                annotations: new AnnotationCollection([new Annotation()])
            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });

        // Returns the Model class
        return Video;

    }

);
