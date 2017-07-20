import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import { requestSingleTeam } from '../actions/team_actions';
import Team from './team';

const mapStateToProps = state => ({
  team: state.team
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestSingleTeam: (id) => dispatch(requestSingleTeam(id))
});

const TeamContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Team);

export default TeamContainer;
