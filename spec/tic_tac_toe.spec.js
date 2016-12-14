import TicTacToe from 'tic_tac_toe';
import Board from 'board';
import Player from 'player';

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
      testGame.placeMarker(0,1,2);
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
      testGame.turn(1, 1);
      expect(testGame.board.emptySpace(1, 1)).toEqual(false);
      expect(function() {testGame.turn(1, 1);}).toThrow(new Error('Space is occupied. Pick an empty space.'));
    });

    it('should not let you play more than 9 turns', function(){
      testGame.turnCount = 9;
      expect(function() {testGame.turn(2, 1);}).toThrow(new Error('Game is over! Please clear your board for a new game.'));
    });
    // it ('should get player\'s space input', function(){
    //   expect() ////@TODO wait until backbone
    // });
  });
});
