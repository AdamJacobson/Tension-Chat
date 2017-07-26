import * as Actions from '../actions/team_actions';
import { CLEAR_NON_SESSION_DATA } from '../actions/session_actions';


// Do we need to store teams here? Only needed for selecting on one page
const defaultState = {
  name: null,
  id: null
};

const teamReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_NON_SESSION_DATA:
      return defaultState;

    case Actions.RECEIVE_SINGLE_TEAM:
      return Object.assign({}, state, action.team);

    default:
      return state;
  }
};

export default teamReducer;
