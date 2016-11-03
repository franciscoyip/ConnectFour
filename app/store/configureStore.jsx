var redux = require('redux');
var thunk = require('redux-thunk').default;
var rootReducer = require('reducers').default;

export var configure = (initialState={})=>{

  //weird
  var store = redux.createStore(rootReducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
