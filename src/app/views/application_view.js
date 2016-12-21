import Backbone from 'backbone';
import $ from 'jquery';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
import TicTacToe from 'app/models/tic_tac_toe';

var ApplicationView = Backbone.View.extend({
  initialize: function(){
    console.log("ApplicationView created");
    // var board = new Board();
    // console.log(this.model.board);
    this.boardView = new BoardView({
      model: this.model.board,
      el: this.$('#board'),
      // application_view: this
    });
    this.listenTo(this.boardView, 'turn', this.takeTurn);
    this.listenTo(this.boardView, "checkwinner", this.checkWinner);
    this.render();
  },

  events: {
    'click .btn-new-game': 'newGame'
  },

  takeTurn: function(coordinates){
    // console.log(this.model.currentPlayer);
    // console.log(coordinates);
    console.log(this.model.currentPlayer.get("num"));
    this.model.turn(coordinates[0], coordinates[1]);
  },

  checkWinner: function(boardView) {
    if (this.model.turnCount >= 5) {
    if (this.model.checkWin() !== false){
      window.confirm('someone won');
    }
    console.log(this.model.checkWin());
    }
  },

  newGame: function(){
    console.log('new game clicked');
    // console.log(this.model.board);
    this.model = new TicTacToe();
    this.boardView.model = this.model.board;
    this.boardView.render();
  },

  render: function(){
    console.log("rendering within appView");
  }
});

export default ApplicationView;
