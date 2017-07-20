import * as Actions from '../actions/team_actions';

const defaultState = {
  name: null,
  id: null,
  teams: []
};

const teamReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case Actions.RECEIVE_TEAMS:
      return Object.assign({}, defaultState, { teams: action.teams });

    case Actions.RECEIVE_SINGLE_TEAM:
      return Object.assing({}, defaultState, action.team);

    default:
      return state;
  }
};

export default teamReducer;
