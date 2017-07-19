import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import messageReducer from './message_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  message: messageReducer
});

export default rootReducer;
