import Board from 'board';
import Player from 'player';

var TicTacToe = function(){
  this.MAX_TURNS = 9;
  this.totalTurns = 0;
  this.board = new Board();
  this.players = [new Player(1), new Player(2)];
  this.currentPlayer = this.players[0];
  this.turnCount = 0;
};

TicTacToe.prototype.placeMarker = function(row, column, player) {
  this.board.playingField[row][column] = player;
};

TicTacToe.prototype.checkWin = function() {
  //first, iterate over each row
  for (var i = 0; i< 3; i++) {
    var sum = 0;
    for (var x = 0; x < 3; x++){
      sum += this.board.playingField[i][x];
    }
    if (sum === 3) {
      return this.players[0];
    } else if (sum === 15) {
      return this.players[1];
    }
  }
  return false;
};

TicTacToe.prototype.turn =
function(row, column) {
  if (this.turnCount === 9) {
    throw new Error('Game is over! Please clear your board for a new game.');
  }

  // if space is empty, placeMarker
  // if not, throw error and start turn over
  if (this.board.emptySpace(row, column) === true) {
    this.placeMarker(row, column, this.currentPlayer);
  } else {
    throw new Error('Space is occupied. Pick an empty space.');
  }



  this.turnCount += 1;

  //if turnCount >=5, check for winner

  // if turnCount === 9, check for tie
  if (this.currentPlayer=== this.players[0]) {
    this.currentPlayer = this.players[1];
  } else {
    this.currentPlayer = this.players[0];
  }
};

export default TicTacToe;
