import Backbone from 'backbone';
import Board from 'app/views/board_view';

var ApplicationView = Backbone.View.extend({
  initialize: function(){
    console.log("ApplicationView created");
    this.render();

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
