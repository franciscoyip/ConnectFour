var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import Main from 'Main';
import ConnectFour from 'ConnectFour';
import Ranking from 'Ranking';


var actions = require('actions');
var store = require('configureStore').configure();

require('style!css!sass!applicationStyles');

//Load CSS Framework
$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={ConnectFour}/>
        <Route path="ranking" compoent={Ranking}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
