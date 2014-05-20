define(
    [
        'backbone',
        'handlebars',
        'app/domain/repository',
        'app/widgets/ListWidget',
        'text!app/pages/Currency/CurrencyPageTemplate.html'
    ],
    function(Backbone, Handlebars, Repository, ListWidget, CurrrencyPageTemplate) {
        'use strict';

        return Backbone.View.extend({
            tagName: 'section',
    
            template: Handlebars.compile(CurrrencyPageTemplate),
    
            render: function() {
                this.$el.html(this.template());
        
                var listWidget = new ListWidget({
                    collection: Repository.getCurrencies()
                });
        
                this.$el.append(listWidget.render().el);
        
                return this;
            }
        });
    }
);