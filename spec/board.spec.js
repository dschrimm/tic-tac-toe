import Board from 'board';

describe('Board', function() {
  var testBoard = new Board();

  describe('board', function() {
    it('should exist', function() {
      expect(testBoard instanceof Board).toEqual(true);
    });

    it('should start with an empty board', function(){
      expect(testBoard.playingField instanceof Array).toEqual(true);
    });

    it('should have 9 empty spaces with default value of 0', function(){
      expect(testBoard.playingField).toEqual([[0,0,0],[0,0,0],[0,0,0]]);
    });
  });

  // describe('board', function() {
  //   it('should exist', function() {
  //     expect(testBoard instanceof Board).toEqual(true);
  //   });
  // });
});

// console.log(Object.getOwnPropertyNames(testBoard));
