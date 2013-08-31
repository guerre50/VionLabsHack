// Collection.js
// -------------
define(["jquery","backbone", "App", "models/Annotation", "firebase", "backbone.firebase"],

  function($, Backbone, app, Annotation) {
    // Creates a new Backbone Collection class object
    var AnnotationCollection = Backbone.Firebase.Collection.extend({

      // Reference to this collection's model.
      model: Annotation,

      initialize: function() {
        this.firebase = app.firebase.child("videos/"+ app.movieId + "/annotations");
      }

    });

    // Returns the Model class
    return AnnotationCollection;
  }
);