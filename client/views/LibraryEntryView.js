// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  className: 'libraryEntryView',

  template: _.template('<td class ="song">(<%= artist %>)</td><td class="song"><%= title %></td><td class="enqueue">Add to Queue</td><td class="dequeue">Remove from Queue</td>'),

  events: {
    'click': function() {
      console.log('Clicked Play', this.el );
      this.model.play();
    },
    'dblclick': function(){
      console.log('Clicked Added to Queue');
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
