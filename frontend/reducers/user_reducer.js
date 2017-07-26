import * as Actions from '../actions/user_actions';
import { objectifyUsers } from '../selectors/selectors';
import { CLEAR_NON_SESSION_DATA } from '../actions/session_actions';


const defaultState = { };

const userReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_NON_SESSION_DATA:
    return defaultState;

    case Actions.RECEIVE_USERS:
      return Object.assign({}, state, objectifyUsers(action.users));

    case Actions.RECEIVE_SINGLE_USER:
      return Object.assign({}, state, objectifyUsers([action.user]));

    default:
      return state;
  }
};

export default userReducer;
