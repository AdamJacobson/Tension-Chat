import * as Actions from '../actions/message_actions';

const defaultState = [];

const messageReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Actions.RECEIVE_MESSAGES:
      return state.concat(action.messages);

    case Actions.RECEIVE_SINGLE_MESSAGE:
      return state.concat(action.message);

    default:
      return state;
  }
};

export default messageReducer;
