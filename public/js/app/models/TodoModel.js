define(["jquery", "backbone"],

    function($, Backbone) {

        // Creates a new Backbone Model class object
        var TodoModel = Backbone.Model.extend({

            // Default attributes for the todo item.
            defaults: function() {
              return {
                title: "empty todo...",
                done: false
              };
            },

            // Ensure that each todo created has `title`.
            initialize: function() {
              if (!this.get("title")) {
                this.set({"title": this.defaults().title});
              }
            },

            // Toggle the `done` state of this todo item.
            toggle: function() {
              this.set({done: !this.get("done")});
            },

            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {

            }

        });

        // Returns the Model class
        return TodoModel;

    }

);
