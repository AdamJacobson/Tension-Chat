import React from 'react';
import { connect } from 'react-redux';

import { sendMessage, requestMessages } from '../actions/message_actions';
import { requestUsers } from '../actions/user_actions';
import Messages from './messages';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  messages: state.messages,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (message) => dispatch(sendMessage(message)),
  requestMessages: (channelId) => dispatch(requestMessages(channelId)),
  requestUsers: (teamId) => dispatch(requestUsers(teamId))
});

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
