import * as APIUtil from '../util/session_api_util';
import { unsubscribeFromUsers } from '../connections/users_connection';
import { unsubscribeFromMessages } from '../connections/messages_connection';
import { unsubscribeFromDirectMessages } from '../connections/direct_messages_connection';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const CLEAR_STATE = "CLEAR_STATE";
export const CLEAR_NON_SESSION_DATA = "CLEAR_NON_SESSION_DATA";

export const signup = user => dispatch => {
  const success = response => dispatch(receiveCurrentUser(response));
  const failure = response => dispatch(receiveErrors(response.responseJSON));

  return APIUtil.signup(user).then(success, failure);
};

export const login = user => dispatch => {
  const success = response => dispatch(receiveCurrentUser(response));
  const failure = response => dispatch(receiveErrors(response.responseJSON));

  return APIUtil.login(user).then(success, failure);
};

export const logout = () => dispatch => {
  const success = response => dispatch(clearState());
  const failure = response => dispatch(receiveErrors(response.responseJSON));

  unsubscribeFromUsers();
  unsubscribeFromMessages();
  unsubscribeFromDirectMessages();
  return APIUtil.logout().then(success, failure);
};

export const clearNonSessionData = () => {
  return { type: CLEAR_NON_SESSION_DATA };
};

export const receiveErrors = errors => (
  {
    type: RECEIVE_ERRORS,
    errors
  }
);

export const clearErrors = () => (
  {
    type: CLEAR_ERRORS
  }
);

export const clearState = () => (
  {
    type: CLEAR_STATE
  }
);

export const receiveCurrentUser = currentUser => (
  {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
);
