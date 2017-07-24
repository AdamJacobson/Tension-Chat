import * as Actions from '../actions/channel_actions';

const defaultState = {
  entities: [],
  currentChannel: null
};

const channelReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Actions.RECEIVE_CHANNELS:
      return Object.assign({}, state, { entities: action.channels });

    case Actions.UPDATE_CHANNEL_ID:
      return Object.assign({}, state, { currentChannel: action.channelId } );

    case Actions.RECEIVE_SINGLE_CHANNEL:
      console.log("== Receiving a single channel ==");
      console.log(action.channel);

    default:
      return state;
  }
};

export default channelReducer;
