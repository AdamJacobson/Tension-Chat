import * as APIUtil from '../util/session_api_util';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const signup = user => dispatch => {
  console.log("Action: signup");
  const success = response => dispatch(receiveCurrentUser(response));
  const failure = response => dispatch(receiveErrors(response.responseJSON));

  return APIUtil.signup(user).then(success, failure);
};

export const login = user => dispatch => {
  console.log("Action: login");
  const success = response => dispatch(receiveCurrentUser(response));
  const failure = response => dispatch(receiveErrors(response.responseJSON));

  return APIUtil.login(user).then(success, failure);
};

export const logout = () => dispatch => {
  console.log("Action: logout");
  const success = response => dispatch(receiveCurrentUser(null));
  const failure = response => dispatch(receiveErrors(response.responseJSON));

  return APIUtil.logout().then(success, failure);
};

export const receiveErrors = errors => (
  {
    type: RECEIVE_ERRORS,
    errors
  }
);

export const receiveCurrentUser = currentUser => (
  {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
);
