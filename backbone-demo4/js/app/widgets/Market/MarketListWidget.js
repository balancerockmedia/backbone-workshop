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
                'click .delete': 'deleteMarket',
                'click .edit': 'editMarket'
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
            },
            
            editMarket: function(e) {
                e.preventDefault();
                
                var market = this.collection.get($(e.target).data('id'));
                
                var currentName = market.get('name');
                var currentLocationId = market.get('location_id');
                var currentCurrencyId = market.get('currency_id');
                
                $('input[name="name"]').val(currentName);
                $('select[name="location_id"]').val(currentLocationId);
                $('select[name="currency_id"]').val(currentCurrencyId);
                
                $('input[name="id"]').val(market.get('id'));
                
                $('input[name="action"]').val('update');
            }
        });
    }
);