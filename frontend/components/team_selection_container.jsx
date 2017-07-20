import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import { requestTeams, requestSingleTeam } from '../actions/team_actions';
import TeamSelection from './team_selection';

const mapStateToProps = state => ({
  team: state.team,
  teams: state.team.teams,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestTeams: () => dispatch(requestTeams()),
  requestSingleTeam: id => dispatch(requestSingleTeam(id))
});

const TeamSelectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamSelection);

export default TeamSelectionContainer;
