import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import messageReducer from './message_reducer';

import { CLEAR_STATE } from '../actions/session_actions';

const appReducer = combineReducers({
  session: sessionReducer,
  messages: messageReducer
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STATE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
