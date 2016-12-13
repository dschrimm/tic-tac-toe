import Player from 'tic_tac_toe';

describe('Player', function() {
  var testPlayer = new Player(1);
  console.log(testPlayer.keys);
  describe('player', function() {
    it('should have a marker', function() {
      expect(testPlayer.marker).toEqual(1);
    });
  });
});
