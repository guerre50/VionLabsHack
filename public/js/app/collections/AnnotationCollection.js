// Collection.js
// -------------
define(["jquery","backbone","models/Annotation", "firebase", "backbone.firebase"],

  function($, Backbone, Annotation, Firebase) {
    // Creates a new Backbone Collection class object
    var AnnotationCollection = Backbone.Firebase.Collection.extend({

      // Reference to this collection's model.
      model: Annotation,

      // Save all of the todo items in a Firebase.
      firebase: new Firebase("https://backbone.firebaseio.com"),
    });

    // Returns the Model class
    return AnnotationCollection;
  }
);