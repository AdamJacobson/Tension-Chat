// import * as Actions from '../actions/direct_message_actions';
// import { markUnread, markRead, objectify } from '../selectors/selectors';
// import { CLEAR_NON_SESSION_DATA } from '../actions/session_actions';
//
// const defaultState = { };
//
// const directMessageReducer = (state = defaultState, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case CLEAR_NON_SESSION_DATA:
//       return defaultState;
//
//     case Actions.RECEIVE_DIRECT_MESSAGES:
//       return Object.assign({}, state, { [action.id]: action.messages } );
//
//     default:
//       return state;
//   }
// };
//
// export default directMessageReducer;
