import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import SpaceView from 'app/views/space_view';

var BoardView = Backbone.View.extend({
  initialize: function() {
    console.log("BoardView created");
    // this.template = _.template(Backbone.$('#tmpl-trip-card').html());
    // this.render();
  },

  events: {
    'click td': 'cellClick'
  },

  cellClick: function(e) {
    console.log(e.currentTarget.id);
    console.log(e.currentTarget);

    // Add class associated with player's number to determine marker color
    $(e.currentTarget).addClass('clicked');
    // this.trigger('select', this);

    // We return false to tell jQuery not to run any more event handlers.
    // Otherwise, it would run the 'click' event handler on RolodexView
    // as well.
    return false;
  },
});

export default BoardView;
