import * as MessageAPI from '../util/message_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_SINGLE_MESSAGE = "RECEIVE_SINGLE_MESSAGE";
export const MARK_MESSAGES_AS_READ = "MARK_MESSAGES_AS_READ";

export const receiveMessages = (messages, channelId) => {
  return {
    type: RECEIVE_MESSAGES,
    messages,
    channelId
  };
};

export const receiveSingleMessage = (message) => {
  return {
    type: RECEIVE_SINGLE_MESSAGE,
    message
  };
};

export const markMessagesAsRead = channelId => {
  return {
    type: MARK_MESSAGES_AS_READ,
    channelId
  };
};

export const requestMessages = channelId => dispatch => {
  const success = response => dispatch(receiveMessages(response, channelId));
  const failure = response => {debugger;};

  MessageAPI.fetchMessages(channelId).then(success, failure);
};

export const sendMessage = message => dispatch => {
  // const success = response => dispatch(receiveSingleMessage(response));
  const failure = response => {debugger;};

  MessageAPI.sendMessage(message).then(null, failure);
};
