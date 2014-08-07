// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',
  className: 'songQueueEntryView',

  template: _.template('<td class ="song">(<%= artist %>)</td><td class="song"><%= title %></td>'),


  render: function(){
    console.log('SongQueueEntryView');
    return this.$el.html(this.template(this.model.attributes));
  }

});
