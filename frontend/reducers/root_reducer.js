import { combineReducers } from 'redux';

import directMessageReducer from './direct_messages_reducer';
import channelReducer from './channel_reducer';
import messageReducer from './message_reducer';
import sessionReducer from './session_reducer';
import teamReducer from './team_reducer';
import userReducer from './user_reducer';

import { CLEAR_STATE } from '../actions/session_actions';

const appReducer = combineReducers({
  channels: channelReducer,
  messages: messageReducer,
  session: sessionReducer,
  team: teamReducer,
  users: userReducer
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STATE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
