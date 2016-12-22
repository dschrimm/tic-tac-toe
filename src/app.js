import $ from 'jquery';
import TicTacToe from 'app/models/tic_tac_toe';
// import TicTacToeList from 'app/collections/tic_tac_toe_list';
// import TicTacToeListView from 'app/views/tic_tac_toe_list_view';
import ApplicationView from 'app/views/application_view';

$(document).ready(function() {
  console.log("doing anything at all");

  var game = new TicTacToe();

  var appView = new ApplicationView({
    el: '#application',
    model: game
  });

  // var ticTacToeList = new TicTacToeList();
  // ticTacToeList.fetch();
  // // console.log(ticTacToeList);
  //
  // var options = {
  //   el: $('#past-games'),
  //   model: ticTacToeList
  // };
  // var gamesList = new TicTacToeListView(options);
  // gamesList.render();
});
