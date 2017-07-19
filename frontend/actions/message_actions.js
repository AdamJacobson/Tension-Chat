import * as MessageAPI from '../util/message_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_SINGLE_MESSAGE = "RECEIVE_SINGLE_MESSAGE";

export const receiveMessages = messages => {
  console.log("Action: receiveMessages");
  return {
    type: RECEIVE_MESSAGES,
    messages
  };
};

export const receiveSingleMessage = message => {
  console.log("Action: receiveSingleMessage");
  return {
    type: RECEIVE_MESSAGES,
    message
  };
};

export const requestMessages = channelId => dispatch => {
  const success = response => dispatch(receiveMessages(response));
  const failure = response => {debugger};

  MessageAPI.fetchMessages(channelId).then(success, failure);
};
