import Backbone from 'backbone';

const Board = Backbone.Model.extend({
  initialize: function() {
    this.playingField = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    this.markers = ['&#128056;', '&#128099;'];
  },

  emptySpace: function(row, column) {
    if (this.playingField[row][column] === ' ') {
      return true;
    } else {
      return false;
    }
  }
});

export default Board;
