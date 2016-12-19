import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  initialize: function(options) {
    this.marker = options['num'];
  }
});


export default Player;
