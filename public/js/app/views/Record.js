// Record.js
// -------
define(["App", "jquery", "backbone", "firebase", "models/Model", "text!templates/record.html"],

    function(app, $, Backbone, firebase, Model, template){

        var Record = Backbone.View.extend({

            // The DOM Element associated with this view
            el: ".example",

            movie_id: 123,

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

                this.movie_id = window.location.hash.substr(1);
            },

            // View Event Handlers
            events: {
                'click #realtime_button': 'realtime_button'
            },

            realtime_button: function(ev) {
                app.firebase.child('videos/' + this.movie_id + '/input').push({'timestamp': +new Date()}, function (data) {   //alert(data);
                });

                return false;
            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                // Maintains chainability
                return this;

            }

        });

        // Returns the Record class
        return Record;

    }

);