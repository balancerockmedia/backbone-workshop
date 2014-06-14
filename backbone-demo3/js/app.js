// create backbone collection
var Locations = Backbone.Collection.extend({
    url: 'http://166.78.112.120:3000/locations'
});

// create backbone collection
var Currencies = Backbone.Collection.extend({
    url: 'http://166.78.112.120:3000/currencies'
});

// page view
var PageView = Backbone.View.extend({
    tagName: 'section',
    
    initialize: function(options) {
        this.page = options.page;
        
        this.template = Handlebars.compile($('#'+this.page+'-page-template').html());
    },
    
    render: function() {
        this.$el.html(this.template());
        
        var listView;
        
        // add child view
        switch(this.page) {
            case 'location':
            listView = new ListView({
                collection: new Locations()
            });
            break;
        
            case 'currency':
            listView = new ListView({
                collection: new Currencies()
            });
            break;
        }
        
        this.$el.append(listView.render().el);
        
        return this;
    }
});

// list view
var ListView = Backbone.View.extend({
    tagName: 'ul',
    
    // constructor that adds a reset event to collection and then does a fetch
    initialize: function() {
        this.listenTo(this.collection, 'reset', this.render);
        
        this.collection.fetch({reset: true}); // reset true unless you want to merge items into collection
    },
    
    render: function() {
        var models = this.collection.models;
        
        var template = Handlebars.compile($('#list-template').html());
        
        // render each model using a template
        for (var i = 0; i < models.length; i++) {
            this.$el.append(template(models[i].attributes));
        }
        
        return this;
    }
});

// create router
var Router = Backbone.Router.extend({
    routes: {
        '': 'locations',
        'locations': 'locations',
        'currencies': 'currencies'
    },
    
    locations: function() {
        // create an instance of the PageView
        var pageView = new PageView({
            page: 'location'
        });
        
        // render the page view
        $('#container').html(pageView.render().el);
    },
    
    currencies: function() {
        // create an instance of the PageView
        var pageView = new PageView({
            page: 'currency'
        });
        
        // render the page view
        $('#container').html(pageView.render().el);
    }
});

var router = new Router();
Backbone.history.start();