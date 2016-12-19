import _ from 'underscore';
import Backbone from 'backbone';

var SpaceView = Backbone.View.extend({
  initialize: function(){
    console.log("SpaceView created");
    this.render();
  },

  render: function(){
    console.log("inside space render");
    return this;
  }
});

export default SpaceView;
