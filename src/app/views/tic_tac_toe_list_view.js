import $ from 'jquery';
import Backbone from 'backbone';

import ApplicationView from 'app/views/application_view';

var TicTacToeListView = Backbone.View.extend({
  initialize: function(options) {
    // Compile a template to be shared between the individual tasks
    this.gameTemplate = _.template($('#game-template').html());

    // Keep track of the <ul> element
    this.listElement = this.$('.game-list');

    // We'll keep track of a list of game models and a list of game views.
    this.gameList = [];

    this.model.forEach(function(rawGame) {
      // console.log('rawgame: ' + rawGame);
      this.addGame(rawGame);
    }, this); // bind `this` so it's available inside forEach

    // // When a model is added to the collection, create
    // // a card for that model and add it to our list of cards
    // this.listenTo(this.model, 'add', this.addGame);
    //
    // // When a model is removed from the collection, remove
    // // the card for that task from our list of cards
    // this.listenTo(this.model, 'remove', this.removeGame);
    //
    // // When the model updates, re-render the list of cards
    // this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();
// console.log('gamelist ' + JSON.stringify(this.gameList));
    // Loop through the data assigned to this view
    this.gameList.forEach(function(game) {
      // Cause the game to render
      game.render();

      // Add that HTML to our game list
      this.listElement.append(game.$el);
    }, this);

    this.input = {
      title: this.$('.new-task input[name="title"]'),
      description: this.$('.new-task input[name="description"]')
    };

    return this; // enable chained calls
  },

  addGame: function(gameInfo) {
    var game = new ApplicationView({
      model: gameInfo
      // ,
      // template: this.gameTemplate
    });
    console.log(game);

    // Add the card to our card list
    this.gameList.push(game);
  },

  removeGame: function(task) {

  }

});

export default TicTacToeListView;
