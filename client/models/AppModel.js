// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song) {
      this.set('currentSong', song);
      console.dir(this);
    }, this);

    // I want the controller to give me information about which model is being acted on
    // then the appmodel "queue the next song" when an enqueue event is fired
    // this.songQueue

    params.library.on('enqueue', function(song) {
      console.log(song, this.get('songQueue'));
      this.get('songQueue').add(song);
    }, this);

    this.get('songQueue').on('dequeue', function(song) {
      this.set('currentSong', song);
      // this.get('songQueue').remove(song);
    }, this);
  }

});
