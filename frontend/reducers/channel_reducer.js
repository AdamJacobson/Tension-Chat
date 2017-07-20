import * as Actions from '../actions/channel_actions';

const defaultState = [];

const channelReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Actions.RECEIVE_CHANNELS:
      return action.channels;

    // case Actions.RECEIVE_SINGLE_CHANNEL:
    //   return Object.assign({}, defaultState, action.team);

    default:
      return state;
  }
};

export default channelReducer;
