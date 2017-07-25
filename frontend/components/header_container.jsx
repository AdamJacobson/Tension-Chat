import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
// import { requestUsers } from '../actions/user_actions';
import Header from './header';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentChannel: state.channels.currentChannel,
  channel: state.channels
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default ChatContainer;
