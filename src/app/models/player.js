import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  initialize: function(num) {
    this.marker = num;
  }
});


export default Player;
