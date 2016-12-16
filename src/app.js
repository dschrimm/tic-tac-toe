import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var appView = new ApplicationView({
  el: '#application',
  model: application
});
