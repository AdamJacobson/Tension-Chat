// import * as Api from '../util/direct_message_api_util';
//
// export const RECEIVE_DIRECT_MESSAGES = "RECEIVE_DIRECT_MESSAGES";
//
// export const receiveDirectMessages = (messages, id) => {
//   return {
//     type: RECEIVE_DIRECT_MESSAGES,
//     id,
//     messages
//   };
// };
//
// export const requestDirectMessages = (teamId, recipientId) => dispatch => {
//   const success = response => dispatch(receiveDirectMessages(response, recipientId));
//   const failure = response => {debugger;};
//
//   Api.fetchDirectMessages(teamId, recipientId).then(success, failure);
// };
//
// // export const requestConversations
