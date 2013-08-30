// Require.js Configurations
// -------------------------
require.config({

  // Sets the js folder as the base directory for all future relative paths
  baseUrl: "./js/app",

  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {

      // Core Libraries
      // --------------
      "jquery": "../libs/jquery",

      "jqueryui": "../libs/jqueryui",

      "jquerymobile": "../libs/jquery.mobile",

      "underscore": "../libs/lodash",

      "backbone": "../libs/backbone",

      // Plugins
      // -------
      "backbone.validateAll": "../libs/plugins/Backbone.validateAll",

      "bootstrap": "../libs/plugins/bootstrap",

      "text": "../libs/plugins/text",

      "jasminejquery": "../libs/plugins/jasmine-jquery",

      "bacbkone.firebase": "../libs/plugins/backbone-firebase",

      // Flat-UI

      "jquery.ui.custom" : "../libs/flat-ui/jquery-ui-1.10.3.custom.min",

      "jquery.ui.touch-punch" : "../libs/flat-ui/jquery.ui.touch-punch.min",

      "bootstrap.select": "../libs/flat-ui/bootstrap-select",

      "bootstrap.switch": "../libs/flat-ui/bootstrap-switch",

      "flatui.checkbox" : "../libs/flat-ui/flatui-checkbox",

      "flatui.radio" : "../libs/flat-ui/flatui-radio",

      "jquery.tagsinput" : "../libs/flat-ui/jquery.tagsinput",

      "jquery.placeholder" : "../libs/flat-ui/jquery.placeholder",

      "jquery.stacktable" : "../libs/flat-ui/jquery.stacktable",

      // Marionette

      "localstorage": "../libs/plugins/Backbone.localStorage",

      "wreqr": "../libs/plugins/backbone.wreqr",

      "babysitter": "../libs/plugins/backbone.babysitter",

      "json2": "../libs/plugins/json2",

      "marionette": "../libs/plugins/backbone.marionette"


  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {
      // jQuery Mobile
      "jquerymobile": ["jquery"],

      // Twitter Bootstrap jQuery plugins
      "bootstrap": ["jquery"],

      // jQueryUI
      "jqueryui": ["jquery"],

      // Backbone
      "backbone": {

        // Depends on underscore/lodash and jQuery
        "deps": ["underscore", "jquery"],

        // Exports the global window.Backbone object
        "exports": "Backbone"

      },

      "bootstrap.select": ["bootstrap"],

      "bootstrap.switch": ["bootstrap"],

      "jquery.tagsinput": ["jquery"],

      "jquery.placeholder": ["jquery"],

      "jquery.stacktable": ["jquery"],

      // Flat-UI
      "flatui": ["jquery", "bootstrap", "jquery.ui.custom", 
                  "jquery.ui.touch-punch", "bootstrap.select", 
                  "bootstrap.switch", "flatui.checkbox", "flatui.radio",
                  "jquery.tagsinput", "jquery.placeholder", "jquery.stacktable"],

      // Backbone.validateAll plugin that depends on Backbone
      "backbone.validateAll": ["backbone"],

      // Jasmine-jQuery plugin
      "jasminejquery": ["jquery"],

      // Backbone.Firebase
      "backbone.firebase": ["backbone"],

      // Marionette
      "marionette": {
        "deps": ["jquery", "underscore", "backbone", "wreqr", "babysitter", "json2"],
        "exports": "Marionette"
      },

      "wreqr": ["backbone"],
      "babysitter": ["backbone"]

  }

});