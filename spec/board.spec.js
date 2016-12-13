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

  describe('emptySpace', function(){
    //parameter passed is the coordinate: [][]
    testBoard.emptySpace([0][1]);
    it('should return true if requested space is empty', function(){
      expect(testBoard.emptySpace([0][1])).toEqual(true);
    });
  });


  // describe('board', function() {
  //   it('should exist', function() {
  //     expect(testBoard instanceof Board).toEqual(true);
  //   });
  // });
});

// console.log(Object.getOwnPropertyNames(testBoard));
