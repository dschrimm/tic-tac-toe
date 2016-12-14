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

TicTacToe.prototype.turn =
function() {
  if (this.turnCount === 9) {
    throw new Error('Game is over! Please clear your board for a new game.');
  }

  //check if player's choice is an available spot

  // if it is, place marker

  //if not, throw error and start turn over

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
