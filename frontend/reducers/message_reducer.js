import * as Actions from '../actions/message_actions';
import { markUnread, markRead } from '../selectors/selectors';

const defaultState = { };

const messageReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Actions.RECEIVE_MESSAGES:
      return Object.assign({}, state, {
         [action.channelId]: markUnread(action.messages)
       });

    case Actions.RECEIVE_SINGLE_MESSAGE:
      // Add message to end of existing ones
      const newMessages = {
        [action.message.channel_id]: state[action.message.channel_id].concat(markUnread(action.message))
      };
      return Object.assign({}, state, newMessages);

    case Actions.MARK_MESSAGES_AS_READ:
      // Deep copy array
      const messagesForChannel = JSON.parse(JSON.stringify(state[action.channelId]));
      return Object.assign({}, state, { [action.channelId]: markRead(messagesForChannel) });

    default:
      return state;
  }
};

export default messageReducer;
