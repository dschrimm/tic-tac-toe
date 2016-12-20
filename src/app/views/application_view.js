import Backbone from 'backbone';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';

var ApplicationView = Backbone.View.extend({
  initialize: function(){
    console.log("ApplicationView created");
    var board = new Board();
    var boardView = new BoardView({
      model: board,
      el: this.$('#board')
    });
    this.listenTo(boardView, 'turn', this.takeTurn);
    this.render();
  },

  takeTurn: function(coordinates){
    console.log(coordinates);
  },

  // turn: function(row, column){
  //   this.model.turn(row, column);
  // },

  render: function(){
    console.log("rendering within appView");
    // var boardView = new BoardView({
    //   // model:
    //   el: this.$('#board')
    // });
    // boardView.render();
    //
    // return this;
  }
});

export default ApplicationView;
