// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td style="background-color:blue;">(<%= artist %>)</td><td><%= title %></td>'),
    
  initialize: function() {
    // this.render();
  },

  events: {
    'click': function() {
      console.log("model", this.model);
      console.log("collection", this.collection);
      this.model.dequeue(this);
    }
  },

  render: function() {
      return this.$el.html(this.template(this.model.attributes));
  }
});
