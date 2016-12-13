import TicTacToe from 'tic_tac_toe';
import Player from 'tic_tac_toe';

describe('TicTacToe', function() {
  describe('the truth', function() {
    it('should return true', function() {
      expect(true).toEqual(true);
    });
  });
});

describe('Player', function() {
  var testPlayer = new Player();

  describe('player', function() {
    it('should have a marker', function() {
      expect(testPlayer.marker).toEqual(1);
    });
  });
});
