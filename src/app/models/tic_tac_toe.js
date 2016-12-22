import Backbone from 'backbone';
import Board from 'app/models/board';
import Player from 'app/models/player';

const TicTacToe = Backbone.Model.extend({
  url: 'http://localhost:3000/api/v1/games',

  parse: function(response) {
    return response;
  },

  toJSON: function(){
    var merged = [].concat.apply([], this.board.playingField);

     var object = {
       board: merged,
       players: ["X Player","O Player" ],
       outcome: this.winner
     };
     return object;
   },

  initialize: function(){
    this.MAX_TURNS = 9;
    this.totalTurns = 0;
    this.board = new Board();
    this.players = [new Player({num: 'X'}), new Player({num: 'O'})];
    this.winner = 'draw';
    this.currentMarker = 'X';
    this.currentPlayer = this.players[0];
    this.turnCount = 0;
  },

  placeMarker: function(row, column, player) {
    this.board.playingField[row][column] = player.marker;
  },

  checkWin: function() {
    var leftDiagonalSum = 0;
    var rightDiagonalSum = 0;
    var playerValue = 0;

    for (var i = 0; i< 3; i++) {
      var rowSum = 0;
      var columnSum = 0;

      for (var x = 0; x < 3; x++){
        if (this.board.playingField[i][x] == 'X') {
          rowSum += 1;
        } else if (this.board.playingField[i][x] == 'O') {
          rowSum += 5;
        }

        if (this.board.playingField[x][i] == 'X') {
          columnSum += 1;
        } else if (this.board.playingField[x][i] == 'O') {
          columnSum += 5;
        }
      }

      if (this.board.playingField[i][i] == 'X') {
        leftDiagonalSum += 1;
      } else if (this.board.playingField[i][i] == 'O') {
        leftDiagonalSum += 5;
      }

      if (this.board.playingField[i][2-i] == 'X') {
        rightDiagonalSum += 1;
      } else if (this.board.playingField[i][2-i] == 'O') {
        rightDiagonalSum += 5;
      }

      if (rowSum === 3 || columnSum === 3|| leftDiagonalSum === 3 || rightDiagonalSum === 3) {
        // toads
        this.winner = 'X';
        return this.players[0];
      } else if (rowSum === 15 || columnSum === 15 || leftDiagonalSum === 15 || rightDiagonalSum === 15) {
        // toes
        this.winner = 'O';
        return this.players[1];
      }
    }

    return false;
  },

  turn: function(row, column) {
    if (this.turnCount === 9 || this.checkWin() !== false) {
      throw new Error('Game is over! Please clear your board for a new game.');
    }

    // if space is empty, placeMarker
    // if not, throw error and start turn over
    if (this.board.emptySpace(row, column) === true) {
      this.placeMarker(row, column, this.currentPlayer);

      // increase turn count
      this.turnCount += 1;

      // toggle the player
      if (this.currentPlayer=== this.players[0]) {
        this.currentPlayer = this.players[1];
      } else {
        this.currentPlayer = this.players[0];
      }
    } else {
      alert('Space is occupied. Pick an empty space.');
      throw new Error('Space is occupied. Pick an empty space.');
    }

  }
});

export default TicTacToe;
