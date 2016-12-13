import Board from 'board';
import Player from 'player';

var TicTacToe = function(){
  this.MAX_TURNS = 9;
  this.totalTurns = 0;
  this.board = new Board();
  this.players = [new Player(1), new Player(2)];
};

TicTacToe.prototype.placeMarker = function(row, column, player) {
  this.board.playingField[row][column] = player;
};


export default TicTacToe;
