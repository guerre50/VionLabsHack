// Collection.js
// -------------
define(["jquery","backbone","models/TodoModel", "firebase", "backbone.firebase"],

  function($, Backbone, TodoModel, Firebase) {
    // Creates a new Backbone Collection class object
    var TodoCollection = Backbone.Firebase.Collection.extend({

      // Reference to this collection's model.
      model: TodoModel,

      // Save all of the todo items in a Firebase.
      firebase: new Firebase("https://backbone.firebaseio.com"),

      // Filter down the list of all todo items that are finished.
      done: function() {
        return this.filter(function(todo){ return todo.get('done'); });
      },

      // Filter down the list to only todo items that are still not finished.
      remaining: function() {
        return this.without.apply(this, this.done());
      }

    });

    // Returns the Model class
    return TodoCollection;

  }

);