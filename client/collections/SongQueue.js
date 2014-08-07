// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('ended', function(song){
      console.log('Song Queue Ended');
      this.removeFromQueue(song);
      console.log(this.length, this);
    }, this);
  },
  addToQueue: function(song){
    this.add(song);
    if (this.length === 1){
      this.playFirst();
    }
    return this;
  },
  playFirst: function(){
    this.at(0).play();
    return this;
  },
  removeFromQueue: function(song){
    this.remove(song);
    if ( this.length > 0 ){
      this.playFirst();
      console.log("Removed Song and Played Song");
    }
    return this;
  }

});
