import * as Actions from '../actions/user_actions';
import { objectifyUsers } from '../selectors/selectors';

const defaultState = { };

const userReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Actions.RECEIVE_USERS:
      return Object.assign({}, state, objectifyUsers(action.users));

    case Actions.RECEIVE_SINGLE_USER:
      return Object.assign({}, state, objectifyUsers([action.user]));

    default:
      return state;
  }
};

export default userReducer;
