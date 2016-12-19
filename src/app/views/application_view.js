import Backbone from 'backbone';
import Board from 'app/views/board_view';

var ApplicationView = Backbone.View.extend({
  initialize: function(){
    console.log("ApplicationView created");
    this.render();

  },

  events: {
    'click .table-cell': 'cellClick'
  },

  cellClick: function(e){
    console.log('clicked inside the board!');
    console.log(e.currentTarget.id);

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
