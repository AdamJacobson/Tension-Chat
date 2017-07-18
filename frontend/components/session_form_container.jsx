import React from 'react';
import { connect } from 'react-redux';

import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let formType = (ownProps.location.pathname.includes('login')) ? 'login' : 'signup';

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors || [],
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  if (ownProps.location.pathname.includes('login')) {
    action = login;
  } else {
    action = signup;
  }

  return {
    processForm: (user) => dispatch(action(user))
    // processForm: (user) => action(user)(dispatch)
  };
};

const SessionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

export default SessionFormContainer;
