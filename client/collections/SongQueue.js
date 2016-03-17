// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', this.playFirst);
    // this.on('change:length', )
  },
  playFirst: function() {
    /*console.dir(this.length);
    if (this.length === 1) {
      this.trigger('playFirst', this);
    } else {
      // this.trigger('notPlayFirst', this);
    }*/
  },
  notPlayFirst: function(){}

});