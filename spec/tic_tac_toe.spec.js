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
});
