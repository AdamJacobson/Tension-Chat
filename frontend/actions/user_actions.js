import * as UserAPI from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const receiveSingleUser = user => {
  return {
    type: RECEIVE_SINGLE_USER,
    user
  };
};

export const requestUsers = (teamId) => dispatch => {
  const success = response => dispatch(receiveUsers(response));
  // const failure = response => {debugger;};

  UserAPI.fetchAllUsersForTeam(teamId).then(success, null);
};

export const requestSingleUser = (userId) => dispatch => {
  const success = response => dispatch(receiveSingleUser(response));
  // const failure = response => {debugger;};

  UserAPI.fetchUser(userId).then(success, null);
};
