import * as MessageAPI from '../util/message_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_SINGLE_MESSAGE = "RECEIVE_SINGLE_MESSAGE";
export const MARK_MESSAGES_AS_READ = "MARK_MESSAGES_AS_READ";
export const CLEAR_UNREAD_FLAG = "CLEAR_UNREAD_FLAG";

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

export const clearUnreadFlag = channelId => {
  return {
    type: CLEAR_UNREAD_FLAG,
    channelId
  };
};

export const requestMessages = channelId => dispatch => {
  const success = response => dispatch(receiveMessages(response, channelId));
  // const failure = response => {debugger;};

  MessageAPI.fetchMessages(channelId).then(success, null);
};

export const sendMessage = message => dispatch => {
  // const success = response => dispatch(receiveSingleMessage(response));
  // const failure = response => {debugger;};

  MessageAPI.sendMessage(message); //.then(null, null);
};

/* DirectMessage */

export const RECEIVE_DIRECT_MESSAGES = "RECEIVE_DIRECT_MESSAGES";
export const RECEIVE_DIRECT_MESSAGE = "RECEIVE_DIRECT_MESSAGE";
export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";

export const receiveDirectMessages = (messages, recipientId) => {
  return {
    type: RECEIVE_DIRECT_MESSAGES,
    recipientId,
    messages
  };
};

export const receiveDirectMessage = (message) => {
  return {
    type: RECEIVE_DIRECT_MESSAGE,
    message
  };
};

export const receiveConversations = conversations => {
  return {
    type: RECEIVE_CONVERSATIONS,
    conversations
  };
};

export const sendDirectMessage = message => dispatch => {
  const success = response => dispatch(receiveDirectMessage(response));
  // const failure = response => {debugger;};

  MessageAPI.sendDirectMessage(message).then(success, null);
};

export const requestDirectMessages = (recipientId, teamId) => dispatch => {
  const success = response => dispatch(receiveDirectMessages(response, recipientId));
  // const failure = response => {debugger;};

  MessageAPI.fetchDirectMessages(recipientId, teamId).then(success, null);
};

export const requestConversations = (recipientId, teamId) => dispatch => {
  const success = response => dispatch(receiveConversations(response));
  // const failure = response => {debugger;};

  MessageAPI.fetchConversations(recipientId, teamId).then(success, null);
};
