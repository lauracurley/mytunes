// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst.call(this);
      }
    });

    this.on('ended', function() {
      // this.trigger('dequeue', this.remove(this.at(0)));
      // this.trigger(playFirst);
      console.log("fired!");
      this.at(0).dequeue(); //this.at(0).dequeue(this.at(0));
      if (this.at(0)) {
        this.playFirst.call(this);
      }
    });

    this.on('dequeue', function(which) {
      this.remove(which);
      console.log(this);
    });

    this.on('enqueue', function() {
      // this.remove(this.at(0));
    });

  },
  playFirst: function() {
    // console.log("this - ", this);
    // console.log("song - ", this.at(0));
    this.at(0).play();
  }

});