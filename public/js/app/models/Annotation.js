// Model.js
// --------
define(["jquery", "backbone"],

    function($, Backbone) {

        // Creates a new Backbone Model class object
        var Annotation = Backbone.Model.extend({

            // Model Constructor
            initialize: function() {

            },

            // Default values for all of the Model attributes
            defaults: {
                category: "None", // None, Quote, Pronunciation, Vocabulary
                //reviewed: false,
                markers: parseInt(Math.random()*10)
            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });

        // Returns the Model class
        return Annotation;

    }

);
