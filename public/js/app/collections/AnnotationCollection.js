// Collection.js
// -------------
define(["jquery","backbone", "App", "models/Annotation", "firebase", "backbone.firebase"],

  function($, Backbone, app, Annotation, Firebase) {
    // Creates a new Backbone Collection class object
    var AnnotationCollection = Backbone.Firebase.Collection.extend({

      // Reference to this collection's model.
      model: Annotation,

      // Save all of the todo items in a Firebase.
      firebase: app.firebase.child("annotations"),
    });

    // Returns the Model class
    return AnnotationCollection;
  }
);