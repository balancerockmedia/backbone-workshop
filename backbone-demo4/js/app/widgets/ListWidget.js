define(
    [
        'backbone',
        'text!app/widgets/ListWidgetTemplate.html'
    ],
    function(Backbone, ListTemplate) {
        'use strict';

        return Backbone.View.extend({
            tagName: 'ul',
    
            // constructor that adds a reset event to collection and then does a fetch
            initialize: function() {
                this.listenTo(this.collection, 'reset', this.render);
            },
    
            render: function() {
                var models = this.collection.models;
        
                // render each location model using a template
                for (var i = 0; i < models.length; i++) {
                    var template = Handlebars.compile(ListTemplate);
            
                    this.$el.append(template(models[i].attributes));
                }
        
                return this;
            }
        });
    }
);