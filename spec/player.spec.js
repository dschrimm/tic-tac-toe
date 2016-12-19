import Player from 'app/models/player';

describe('Player', function() {
  var testPlayer = new Player({
    num: 1
  });
  // console.log(Object.getOwnPropertyNames(testPlayer));
  describe('player', function() {
    it('should have a marker', function() {
      expect(testPlayer.marker).toEqual(1);
    });
  });
});
