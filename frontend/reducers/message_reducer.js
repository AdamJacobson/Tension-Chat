import * as Actions from '../actions/message_actions';

const defaultState = { messages: [] };

const messageReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Actions.RECEIVE_MESSAGES:
      return { messages: state.messages.concat(action.messages) };
    case Actions.RECEIVE_SINGLE_MESSAGE:
      return { messages: state.messages.concat(action.message) };
    default:
      return state;
  }
};

export default messageReducer;
