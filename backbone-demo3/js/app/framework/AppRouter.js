define([
    'backbone',
    'app/pages/Location/LocationPage',
    'app/pages/Currency/CurrencyPage'
], function(Backbone, LocationPage, CurrencyPage) {
    'use strict';
    
    return Backbone.Router.extend({
        routes: {
            '': 'locations',
            'locations': 'locations',
            'currencies': 'currencies'
        },
    
        locations: function() {
            // create an instance of the LocationPage
            var pageView = new LocationPage();
        
            // render the page view
            $('#container').html(pageView.render().el);
        },
    
        currencies: function() {
            // create an instance of the CurrencyPage
            var pageView = new CurrencyPage();
        
            // render the page view
            $('#container').html(pageView.render().el);
        }
    });
});