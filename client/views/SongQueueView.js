// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
  className: 'queueView',
  initialize: function() {
    // this.model.on('change', function(model){
    //   this.render();
    // });
    this.render();
  },


  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        console.log(song);
        return new SongQueueEntryView({model:song}).render();
      }));
  }

});
