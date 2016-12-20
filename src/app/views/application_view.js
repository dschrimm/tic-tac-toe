import Backbone from 'backbone';
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';

var ApplicationView = Backbone.View.extend({
  initialize: function(){
    console.log("ApplicationView created");
    // this.render();
    var board = new Board();
    var boardView = new BoardView({
      model: board,
      el: this.$('#board')
    });
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
