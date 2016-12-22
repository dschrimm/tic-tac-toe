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
    // console.log(this.model.winner);
    this.player = 0;
    if (this.model.currentPlayer == this.model.players[0]) {
      this.player = 0;
      this.currentMarker = 'X';
    } else {
      this.player = 1;
      this.currentMarker = 'O';
    }
    // console.log(this.player);
    // console.log('turncount: ' + this.model.turnCount);
    this.model.turn(coordinates[0], coordinates[1]);
    $('.current-player').empty();
    $('.current-player').append(this.model.board.markers[(1 - this.player)]);
    // this.render();
  },

  checkWinner: function(boardView) {
    if (this.model.turnCount >= 5) {
      // var winner = this.model.winner;
      // console.log(winner);
      if (this.model.checkWin() !== false){
        // alert('someone won');
        $('.winner').append(this.model.board.markers[this.player] + " won!");
        $('.current-player').hide();
        $('.current-player-header').hide();
        this.model.save(this.model.toJSON);
      } else if (this.model.turnCount == 9) {
        $('.current-player').hide();
        $('.current-player-header').hide();
        $('.winner').append("It's a tie! Play again.");
        this.model.save(this.model.toJSON);
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
