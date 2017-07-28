import * as TeamAPI from '../util/team_api_util';

export const RECEIVE_SINGLE_TEAM = "RECEIVE_SINGLE_TEAM";

export const receiveSingleTeam = team => {
  return {
    type: RECEIVE_SINGLE_TEAM,
    team
  };
};

export const requestSingleTeam = (teamId) => dispatch => {
  const success = response => dispatch(receiveSingleTeam(response));
  // const failure = response => {debugger;};

  TeamAPI.fetchSingleTeam(teamId).then(success, null);
};
