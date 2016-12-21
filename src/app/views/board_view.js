import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import TicTacToe from 'app/models/tic_tac_toe';
import Board from 'app/models/board';

const BoardView = Backbone.View.extend({
  initialize: function(options) {
    console.log("BoardView created");
    console.log(this.model.playingField);

    // this.application_view = this.options.application_view;

    // this.template = _.template(Backbone.$('#tmpl-trip-card').html());
    this.render();
  },

  events: {
    'click td': 'cellClick',
  },

  cellClick: function(e) {
    var row = parseInt(e.currentTarget.id[0]),
        column = parseInt(e.currentTarget.id[2]);

    this.trigger('turn', [row, column]);

    // Add class associated with player's number to determine marker color
    if (this.model.playingField[row][column] === 1) {
      $(e.currentTarget).addClass('player-one').append('	&#128056;');
    } else if (this.model.playingField[row][column] === 5) {
      $(e.currentTarget).addClass('player-two').append('&#128099;');
    }

    console.log(this.model.playingField);
    // console.log(this.model);
    this.trigger('checkwinner', [this.model]);

    // this.render();

    // this.trigger('select', this);

    // We return false to tell jQuery not to run any more event handlers.
    // Otherwise, it would run the 'click' event handler on RolodexView
    // as well.
    return false;
  },

  render: function() {
    console.log('rendering in boardview');
    $('td').removeClass();
    $('td').empty();
    return this;
  }
});

export default BoardView;
