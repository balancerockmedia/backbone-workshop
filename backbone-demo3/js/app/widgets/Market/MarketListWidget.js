define(
    [
        'backbone',
        'text!app/widgets/Market/MarketListWidgetTemplate.html'
    ],
    function(Backbone, ListTemplate) {
        'use strict';

        return Backbone.View.extend({
            tagName: 'ul',
            
            events: {
                'click .delete': 'deleteMarket'
            },
    
            initialize: function() {
                this.listenTo(this.collection, 'reset', this.render);
            },
    
            render: function() {
                var models = this.collection.models;
                
                for (var i = 0; i < models.length; i++) {
                    var template = Handlebars.compile(ListTemplate);
            
                    this.$el.append(template(models[i].attributes));
                }
        
                return this;
            },
            
            deleteMarket: function(e) {
                e.preventDefault();
                
                var market = this.collection.get($(e.target).data('id'));
                
                market.destroy();
            }
        });
    }
);