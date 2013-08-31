// Collection.js
// -------------
define(["jquery","backbone","App", "models/Video"],

  function($, Backbone, app, Video) {
    // Creates a new Backbone Collection class object
    var VideoCollection = Backbone.Firebase.Collection.extend({

      // Reference to this collection's model.
      model: Video,

      // Save all of the todo items in a Firebase.
      firebase: app.firebase.child("videos")

    });

    // Returns the Model class
    return VideoCollection;

  }

);