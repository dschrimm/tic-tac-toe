import TicTacToe from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var game = new TicTacToe();

var appView = new ApplicationView({
  el: '#application',
  model: game
});
