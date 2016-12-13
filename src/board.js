var Board = function() {
  this.playingField = [[0,0,0],[0,0,0],[0,0,0]];
};

Board.prototype.emptySpace = function(row, column) {
  if (this.playingField[row][column] === 0) {
    return true;
  } else {
    return false;
  }
};

export default Board;
