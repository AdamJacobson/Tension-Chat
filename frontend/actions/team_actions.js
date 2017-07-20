import * as TeamAPI from '../util/team_api_util';

export const RECEIVE_TEAMS = "RECEIVE_TEAMS";
export const RECEIVE_SINGLE_TEAM = "RECEIVE_SINGLE_TEAM";

export const receiveTeams = teams => {
  return {
    type: RECEIVE_TEAMS,
    teams
  };
};

export const receiveSingleTeam = team => {
  return {
    type: RECEIVE_SINGLE_TEAM,
    team
  };
};

export const requestTeams = () => dispatch => {
  const success = response => dispatch(receiveTeams(response));
  const failure = response => {debugger;};

  TeamAPI.fetchAllTeams().then(success, failure);
};

export const requestSingleTeam = (teamId) => dispatch => {
  const success = response => dispatch(receiveTeams(response));
  const failure = response => {debugger;};

  TeamAPI.fetchSingleTeam(teamId).then(success, failure);
};
