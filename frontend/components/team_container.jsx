import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import { requestSingleTeam } from '../actions/team_actions';
import { receiveDirectMessage, requestConversations } from '../actions/message_actions';
import Team from './team';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  team: state.team
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestSingleTeam: id => dispatch(requestSingleTeam(id)),
  receiveDirectMessage: message => dispatch(receiveDirectMessage(message)),
  requestConversations: (recipientId, teamId) => dispatch(requestConversations(recipientId, teamId))
});

const TeamContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Team);

export default TeamContainer;
