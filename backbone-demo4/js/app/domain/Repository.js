define(
    [
        'backbone'
    ],
    function(Backbone) {
        'use strict';
        
        var _locations = new Backbone.Collection();
        _locations.url = 'http://166.78.112.120:3000/locations';
        
        var _currencies = new Backbone.Collection();
        _currencies.url = 'http://166.78.112.120:3000/currencies';
        
        var _markets = new Backbone.Collection();
        _markets.url = 'http://166.78.112.120:3000/markets';
        
        var _repository = {
            getLocations: function () {
                return _locations;
            },
            
            getCurrencies: function () {
                return _currencies;
            },
            
            getMarkets: function () {
                return _markets;
            }
        };
        
        _locations.fetch({reset: true});
        _currencies.fetch({reset: true});
        _markets.fetch({reset: true});

        return _repository;
    }
);