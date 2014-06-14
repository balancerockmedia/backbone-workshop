// Set up the "require" variable which RequireJS will pick up when it is loaded in main.js.
// This ensures that the configuration loads before any other scripts are required in.
var require = {
    // Initialize the application with the main application file
    deps: ['main'],

    paths: {
        // jQuery
        jquery:                      'vendor/jquery-2.1.1.min',

        // Underscore
        underscore:                  'vendor/underscore-min',

        // Backbone
        backbone:                    'vendor/backbone-min',

        // Templating
        handlebars:                  'vendor/handlebars-v1.3.0'
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        handlebars: {
            exports: 'Handlebars'
        },

        underscore: {
            exports: '_'
        }
    }
};