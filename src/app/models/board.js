import Backbone from 'backbone';

const Board = Backbone.Model.extend({
  initialize: function() {
    this.playingField = [[0,0,0],[0,0,0],[0,0,0]];
  },

  emptySpace: function(row, column) {
    if (this.playingField[row][column] === 0) {
      return true;
    } else {
      return false;
    }
  }
});

export default Board;
