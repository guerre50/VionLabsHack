// Collection.js
// -------------
define(["jquery","backbone", "App", "models/Annotation", "firebase", "backbone.firebase"],

  function($, Backbone, app, Annotation, Firebase) {
    // Creates a new Backbone Collection class object
    var AnnotationCollection = Backbone.Firebase.Collection.extend({

      // Reference to this collection's model.
      model: Annotation,

      initialize: function(config) {
        this.firebase = app.firebase.child("videos/" + config.video + "/annotations");
      }
    });

    // Returns the Model class
    return AnnotationCollection;
  }
);