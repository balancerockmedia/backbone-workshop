define([
    'backbone',
    'app/pages/Location/LocationPage',
    'app/pages/Currency/CurrencyPage',
    'app/pages/Market/MarketPage'
], function(Backbone, LocationPage, CurrencyPage, MarketPage) {
    'use strict';
    
    return Backbone.Router.extend({
        routes: {
            '': 'markets',
            'locations': 'locations',
            'currencies': 'currencies',
            'markets': 'markets'
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
        },
        
        markets: function() {
            // create an instance of the MarketPage
            var pageView = new MarketPage();
        
            // render the page view
            $('#container').html(pageView.render().el);
        }
    });
});