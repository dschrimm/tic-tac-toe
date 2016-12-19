import TicTacToe from 'tic_tac_toe';
import Board from 'app/models/board';
import Player from 'app/models/player';

describe('TicTacToe', function() {
  var testGame = new TicTacToe();

  describe('ticTacToe', function() {
    it('should start the turn count at 0', function() {
      expect(testGame.totalTurns).toEqual(0);
    });

    it('should initialize a new game with a new board', function() {
      expect(testGame.board instanceof Board).toEqual(true);
    });

    it('should start with an empty board', function() {
      expect(testGame.board.playingField).toEqual([[0,0,0],[0,0,0],[0,0,0]]);
    });

    it('should start with two players', function() {
      expect(testGame.players.length).toEqual(2);
    });

    it('should have player objects', function() {
      expect(testGame.players[0] instanceof Player).toEqual(true);
      expect(testGame.players[1] instanceof Player).toEqual(true);
    });
  });

  describe('placeMarker', function() {
    it('should place appropriate player\'s marker on designated space', function() {
      expect(testGame.board.emptySpace(0,1)).toEqual(true);
      testGame.placeMarker(0,1,testGame.players[1]);
      expect(testGame.board.emptySpace(0,1)).toEqual(false);
    });
  });

  describe('turn', function(){
    it('should toggle the player', function(){
      var testToggle = new TicTacToe();
      testToggle.turn(0, 0);
      expect(testToggle.currentPlayer).toEqual(testToggle.players[1]);
      testToggle.turn(0, 1);
      expect(testToggle.currentPlayer).toEqual(testToggle.players[0]);
    });

    it('should increase the turn count at the end of the turn', function(){
      testGame.turn(2, 2);
      expect(testGame.turnCount).toEqual(1);
    });

    it('should check if player\'s choice is an available spot', function() {
      expect(testGame.board.emptySpace(1, 1)).toEqual(true);
      // console.log(testGame.board.playingField);
      testGame.turn(1, 1);
      // console.log("turn count:" + testGame.turnCount);
      // console.log(testGame.checkWin());
      // console.log(testGame.board.playingField);
      expect(testGame.board.emptySpace(1, 1)).toEqual(false);
      expect(function() {testGame.turn(1, 1);}).toThrow(new Error('Space is occupied. Pick an empty space.'));
    });

    it('should not let you play more than 9 turns', function(){
      testGame.turnCount = 9;
      expect(function() {testGame.turn(2, 1);}).toThrow(new Error('Game is over! Please clear your board for a new game.'));
    });

    it('should end game when someone wins', function() {
      var winningGame = new TicTacToe();
      winningGame.turn(0, 1);
      winningGame.turn(1, 0);
      winningGame.turn(0, 0);
      winningGame.turn(1, 1);
      // winningGame.turn(0, 2);
      // console.log("check win returns: " + winningGame.checkWin());
      expect(function() {winningGame.turn(0,2);}).toThrow(new Error('Player1 is the winner!'));
      expect(function() {winningGame.turn(2,2);}).toThrow(new Error('Game is over! Please clear your board for a new game.'));
    });

    it('should return a tie error when there is no winner after 9 turns', function(){
      var tiedGame = new TicTacToe();
      tiedGame.turn(0,0);
      tiedGame.turn(0,1);
      tiedGame.turn(1,1);
      tiedGame.turn(0,2);
      tiedGame.turn(1,2);
      tiedGame.turn(1,0);
      tiedGame.turn(2,0);
      tiedGame.turn(2,2);
      expect(function() {tiedGame.turn(2,1);}).toThrow(new Error('It\'s a tie!'));
    });

    // it ('should get player\'s space input', function(){
    //   expect() ////@TODO wait until backbone
    // });
  });

  describe('checkWin', function(){
    it('should recognize a winner (or not) in a row', function(){
      var testRowWin = new TicTacToe();
      expect(testRowWin.checkWin()).toEqual(false);
      testRowWin.board.playingField[1] = [5,5,5];
      expect(testRowWin.checkWin()).toEqual(testRowWin.players[1]);
    });
    it('should recognize a winner (or not) in a column', function(){
      var testColumnWin = new TicTacToe();
      expect(testColumnWin.checkWin()).toEqual(false);
      testColumnWin.board.playingField[0][2] = 1;
      testColumnWin.board.playingField[1][2] = 1;
      testColumnWin.board.playingField[2][2] = 1;
      expect(testColumnWin.checkWin()).toEqual(testColumnWin.players[0]);
    });

    it('should recognize a winner (or not) in a diagonal', function(){
      var testDiagonalWin = new TicTacToe();
      expect(testDiagonalWin.checkWin()).toEqual(false);
      testDiagonalWin.board.playingField[0][2] = 1;
      testDiagonalWin.board.playingField[1][1] = 1;
      testDiagonalWin.board.playingField[2][0] = 1;
      expect(testDiagonalWin.checkWin()).toEqual(testDiagonalWin.players[0]);
    });

    it('should recognize no winner when total sum adds to win but not in correct order', function(){
      var testWackyBoard = new TicTacToe();
      expect(testWackyBoard.checkWin()).toEqual(false);
      testWackyBoard.board.playingField[0][0] = 1;
      testWackyBoard.board.playingField[1][0] = 5;
      testWackyBoard.board.playingField[1][1] = 1;
      testWackyBoard.board.playingField[2][0] = 1;
      testWackyBoard.board.playingField[2][2] = 5;
      expect(testWackyBoard.checkWin()).toEqual(false);
    });
  });
});
