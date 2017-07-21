import * as APIUtil from '../util/session_api_util';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const CLEAR_STATE = "CLEAR_STATE";

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

  return APIUtil.logout().then(success, failure);
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
