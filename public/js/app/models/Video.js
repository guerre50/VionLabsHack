// Model.js
// --------
define(["jquery", "backbone", "collections/AnnotationCollection"],

    function($, Backbone, AnnotationCollection) {

        // Creates a new Backbone Model class object
        var Video = Backbone.Model.extend({

            // Model Constructor
            initialize: function() {

            },

            // Default values for all of the Model attributes
            defaults: {
                title: "",
                preview: "",
                annotations: new AnnotationCollection()
            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });

        // Returns the Model class
        return Video;

    }

);
