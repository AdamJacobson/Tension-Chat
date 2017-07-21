import * as Actions from '../actions/message_actions';

const defaultState = { };

const messageReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Actions.RECEIVE_MESSAGES:
      return Object.assign({}, defaultState, state, { [action.channelId]: action.messages });

    case Actions.RECEIVE_SINGLE_MESSAGE:
      // Add message to end of existing ones
      const newMessages = { [action.message.channel_id]: state[action.message.channel_id].concat(action.message) };
      return Object.assign({}, defaultState, state, newMessages);

    default:
      return state;
  }
};

export default messageReducer;
