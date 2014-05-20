define(
    [   
        'backbone',
        'handlebars',
        'app/domain/repository',
        'app/widgets/ListWidget',
        'text!app/pages/Location/LocationPageTemplate.html'
    ],
    function(Backbone, Handlebars, Repository, ListWidget, LocationPageTemplate) {
        'use strict';

        return Backbone.View.extend({
            tagName: 'section',
    
            template: Handlebars.compile(LocationPageTemplate),
    
            render: function() {
                this.$el.html(this.template());
        
                var listWidget = new ListWidget({
                    collection: Repository.getLocations()
                });
        
                this.$el.append(listWidget.render().el);
        
                return this;
            }
        });
    }
);