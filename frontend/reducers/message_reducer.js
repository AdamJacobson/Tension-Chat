import * as Actions from '../actions/message_actions';
import { markUnread, markRead } from '../selectors/selectors';
import { CLEAR_NON_SESSION_DATA } from '../actions/session_actions';


const defaultState = { };

const messageReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let newMessages;

  switch (action.type) {
    case CLEAR_NON_SESSION_DATA:
      return defaultState;

    case Actions.RECEIVE_DIRECT_MESSAGES:
      newMessages = {
        [action.recipientId]: {
          entities: markUnread(action.messages),
          unread: 0
        }
      };
      return Object.assign({}, state, newMessages);

    case Actions.RECEIVE_DIRECT_MESSAGE:
      let previous;
      if (state[action.message.username] && state[action.message.username].entities) {
        previous = state[action.message.username];
      } else {
        previous = { entities: [], unread: 0 };
      }

      newMessages = {
        [action.message.username]: {
          entities: previous.entities.concat(markUnread(action.message)),
          unread: previous.unread + 1
        }
      };
      return Object.assign({}, state, newMessages);

    case Actions.RECEIVE_CONVERSATIONS:
      newMessages = {};
      action.conversations.forEach((conv) => {
        newMessages[conv] = {
          entities: null,
          unread: 0
        };
      });
      return Object.assign({}, state, newMessages);

    case Actions.RECEIVE_MESSAGES:
      newMessages = {
        [action.channelId]: {
          entities: markUnread(action.messages),
          unread: 0
        }
      };
      return Object.assign({}, state, newMessages);

    case Actions.RECEIVE_SINGLE_MESSAGE:
      // Add message to end of existing ones
      newMessages = {
        [action.message.channel_id]: {
          entities: state[action.message.channel_id].entities.concat(markUnread(action.message)),
          unread: 1
        }
      };
      return Object.assign({}, state, newMessages);

    case Actions.MARK_MESSAGES_AS_READ:
      // Deep copy array
      const messagesForChannel = JSON.parse(JSON.stringify(state[action.channelId].entities));
      newMessages = {
        [action.channelId]: {
          entities: markRead(messagesForChannel),
          unread: state[action.channelId].unread
        }
      };
      return Object.assign({}, state, newMessages);

    case Actions.CLEAR_UNREAD_FLAG:
      newMessages = {
        [action.channelId]: {
          entities: state[action.channelId].entities,
          unread: 0
        }
      };
      return Object.assign({}, state, newMessages);

    default:
      return state;
  }
};

export default messageReducer;
