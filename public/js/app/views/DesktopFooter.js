// View.js
// -------
define(["jquery", "underscore", "backbone", "marionette", "text!templates/desktopfooter.html"],

    function($, _, Backbone, Marionette, template) {
        var DesktopFooter = Backbone.Marionette.ItemView.extend({
            template: _.template(template)
        });

        // Returns the View class
        return DesktopFooter;
    }

);