// create backbone collection
var Locations = Backbone.Collection.extend({
    url: 'http://166.78.112.120:3000/locations' // or your local version
});

// create backbone collection
var Currencies = Backbone.Collection.extend({
    url: 'http://166.78.112.120:3000/currencies'
});

// page view
var LocationPageView = Backbone.View.extend({
    tagName: 'section',
    
    template: Handlebars.compile($('#location-page-template').html()),
    
    render: function() {
        this.$el.html(this.template());
        
        // add child view
        var locationsView = new LocationsView({
            collection: new Locations()
        });
        
        this.$el.append(locationsView.render().el);
        
        return this;
    }
});

var CurrencyPageView = Backbone.View.extend({
    tagName: 'section',
    
    template: Handlebars.compile($('#currency-page-template').html()),
    
    render: function() {
        this.$el.html(this.template());
        
        // add child view
        var locationsView = new CurrencyView({
            collection: new Currencies()
        });
        
        this.$el.append(locationsView.render().el);
        
        return this;
    }
});

// locations view
var LocationsView = Backbone.View.extend({
    tagName: 'ul',
    
    // constructor that adds a reset event to collection and then does a fetch
    initialize: function() {
        this.listenTo(this.collection, 'reset', this.render);
        
        this.collection.fetch({reset: true}); // reset true unless you want to merge items into collection
    },
    
    render: function() {
        var models = this.collection.models;
        
        // render each location model using a template
        for (var i = 0; i < models.length; i++) {
            var template = Handlebars.compile($('#location-template').html());
            
            this.$el.append(template(models[i].attributes));
        }
        
        return this;
    }
});

// currencies view
var CurrencyView = Backbone.View.extend({
    tagName: 'ul',
    
    // constructor that adds a reset event to collection and then does a fetch
    initialize: function() {
        this.listenTo(this.collection, 'reset', this.render);
        
        this.collection.fetch({reset: true}); // reset true unless you want to merge items into collection
    },
    
    render: function() {
        var models = this.collection.models;
        
        // render each location model using a template
        for (var i = 0; i < models.length; i++) {
            var template = Handlebars.compile($('#currency-template').html());
            
            this.$el.append(template(models[i].attributes));
        }
        
        return this;
    }
});

// create router
var Router = Backbone.Router.extend({
    routes: {
        '': 'locations',
        'currencies': 'currencies'
    },
    
    locations: function() {
        // create an instance of the PageView
        var locationPageView = new LocationPageView();
        
        // render the page view
        $('#container').html(locationPageView.render().el);
    },
    
    currencies: function() {
        // create an instance of the PageView
        var currencyPageView = new CurrencyPageView();
        
        // render the page view
        $('#container').html(currencyPageView.render().el);
    }
});

var router = new Router();
Backbone.history.start();