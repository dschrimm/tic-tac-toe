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
    $('.current-player').append(this.model.board.markers[0]);
    this.listenTo(this.boardView, 'turn', this.takeTurn);
    this.listenTo(this.boardView, "checkwinner", this.checkWinner);
    this.render();
  },

  events: {
    'click .btn-new-game': 'newGame'
  },

  takeTurn: function(coordinates){
    this.player = 0;
    if (this.model.currentPlayer == this.model.players[0]) {
      this.player = 0;
    } else {
      this.player = 1;
    }
    // console.log(this.model.currentPlayer);
    // console.log(coordinates);
    console.log(this.model.currentPlayer.get("num"));
    $('.current-player').empty();
    console.log(this.player / 1);
    $('.current-player').append(this.model.board.markers[(1 - this.player)]);
    this.model.turn(coordinates[0], coordinates[1]);
    // this.render();
  },

  checkWinner: function(boardView) {
    if (this.model.turnCount >= 5) {
      var winner = this.model.checkWin();
      if (winner !== false){
        // alert('someone won');
        $('.winner').append(this.model.board.markers[this.player] + " won!");
        $('.current-player').hide();
        $('.current-player-header').hide();
      } else if (this.model.turnCount == 9) {
        $('.current-player').hide();
        $('.current-player-header').hide();
        $('.winner').append("It's a tie! Play again.");
      }
    }
  },

  newGame: function(){
    console.log('new game clicked');
    // console.log(this.model.board);
    this.model = new TicTacToe();
    this.boardView.model = this.model.board;
    $('.current-player').show();
    $('.current-player-header').show();
    $('.current-player').append(this.model.board.markers[0]);
    this.boardView.render();
    this.render();
  },

  render: function(){
    console.log("rendering within appView");
    $('.current-player').empty().append(this.model.board.markers[0]);
    $('.winner').empty();
    return this;
  }
});

export default ApplicationView;
