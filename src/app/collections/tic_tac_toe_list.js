import Backbone from 'backbone';

import TicTacToe from 'app/models/tic_tac_toe';

var TicTacToeList = Backbone.Collection.extend({
  model: TicTacToe,
  url: 'http://localhost:3000/api/v1/games/',
  parse: function(data){
    return data;
  }
});

export default TicTacToeList;
