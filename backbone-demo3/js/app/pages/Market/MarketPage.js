define(
    [   
        'backbone',
        'handlebars',
        'app/domain/repository',
        'app/widgets/Market/MarketListWidget',
        'text!app/pages/Market/MarketPageTemplate.html'
    ],
    function(Backbone, Handlebars, Repository, MarketListWidget, MarketPageTemplate) {
        'use strict';

        return Backbone.View.extend({
            tagName: 'section',
    
            template: Handlebars.compile(MarketPageTemplate),
            
            events: {
                'submit form': 'createMarket'
            },
            
            initialize: function() {
                this.markets = Repository.getMarkets();
                
                this.listenTo(this.markets, 'add change remove', this.render);
            },
    
            render: function() {
                this.$el.html(this.template());
                
                // market list widget
                var marketListWidget = new MarketListWidget({
                    collection: this.markets
                });
        
                this.$el.append(marketListWidget.render().el);
        
                return this;
            },
            
            createMarket: function(e) {
                e.preventDefault();
                
                this.markets.create({
                    name: this.$('input[name="name"]').val(),
                    location_id: this.$('input[name="location_id"]').val(),
                    currency_id: this.$('input[name="currency_id"]').val()
                });
            }
        });
    }
);