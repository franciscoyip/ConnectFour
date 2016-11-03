import { combineReducers } from 'redux';
import { setMessageReducer } from './reducers';
import connect4Reducer from './connect4Reducer';

const rootReducer = combineReducers({
  message: setMessageReducer,
  connect4: connect4Reducer
});

export default rootReducer;
