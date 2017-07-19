import * as Actions from '../actions/session_actions';

const defaultState = { currentUser: null, errors: [] };

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case Actions.RECEIVE_ERRORS:
      return { currentUser: null, errors: action.errors };

    case Actions.RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: [] };

    case Actions.CLEAR_ERRORS:
      return Object.assign({}, state, { errors: [] });

    default:
      return state;
  }
};

export default sessionReducer;
