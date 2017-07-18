import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import Chat from './chat';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

export default ChatContainer;
