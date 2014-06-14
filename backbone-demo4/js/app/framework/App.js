define(
    [
        'app/framework/AppRouter',
        'backbone'
    ],
    function(Router, Backbone) {
        'use strict';

        return {
            start: function start() {

                // Start your master router.
                new Router();

                // Trigger the initial route and start history
                Backbone.history.start();
            }
        };
    }
);