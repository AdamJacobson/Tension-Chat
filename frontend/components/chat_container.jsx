import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import { requestUsers } from '../actions/user_actions';
import Chat from './chat';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentChannel: state.channels.currentChannel,
  team: state.team,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestUsers: (teamId) => dispatch(requestUsers(teamId))
});

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

export default ChatContainer;
