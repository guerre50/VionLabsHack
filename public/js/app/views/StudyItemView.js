
define(["App", "jquery", "underscore", "backbone", "marionette", "text!templates/studyitem.html"],

    function(app, $, _, Backbone, Marionette, template){

        var StudyItemView = Backbone.Marionette.ItemView.extend({
            template: _.template(template),

            ui: {
            },

            // View constructor
            initialize: function() {
            },

            // View Event Handlers
            events: {
            }

           

        });

        // Returns the View class
        return StudyItemView;

    }

);