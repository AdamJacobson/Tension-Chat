import * as Actions from '../actions/channel_actions';
import { CLEAR_NON_SESSION_DATA } from '../actions/session_actions';

const defaultState = {
  entities: null,
  currentChannel: null
};

const channelReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newEntities = [];

  switch (action.type) {    
    case CLEAR_NON_SESSION_DATA:
      return defaultState;

    case Actions.RECEIVE_CHANNELS:
      return Object.assign({}, state, { entities: action.channels });

    case Actions.UPDATE_CHANNEL_ID:
      return Object.assign({}, state, { currentChannel: action.channelId } );

    case Actions.RECEIVE_SINGLE_CHANNEL:
      if (!state.entities) {
        newEntities = [action.channel];
      } else {
        newEntities = state.entities.concat(action.channel);
      }
      return Object.assign({}, state, { currentChannel: action.channel.id, entities: newEntities } );

    case Actions.REMOVE_SINGLE_CHANNEL:
      state.entities.forEach((channel) => {
        if (channel.id !== action.channelId) {
          newEntities.push(channel);
        }
      });
      let newChannel = "";
      if (newEntities.length > 0) {
        newChannel = newEntities[0].id;
      }
      return Object.assign({}, state, { currentChannel: newChannel, entities: newEntities });

    default:
      return state;
  }
};

export default channelReducer;
