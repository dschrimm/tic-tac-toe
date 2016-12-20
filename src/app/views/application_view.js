import Backbone from 'backbone';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
import TicTacToe from 'app/models/tic_tac_toe';

var ApplicationView = Backbone.View.extend({
  initialize: function(){
    console.log("ApplicationView created");
    // var board = new Board();
    // console.log(this.model.board);
    var boardView = new BoardView({
      model: this.model.board,
      el: this.$('#board'),
      // application_view: this
    });
    this.listenTo(boardView, 'turn', this.takeTurn);
    this.render();
  },

  takeTurn: function(coordinates){
    console.log(coordinates);
    console.log(this.model.currentPlayer.get("num"));
    this.model.turn(coordinates[0], coordinates[1]);
  },

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
