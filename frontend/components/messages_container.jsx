import React from 'react';
import { connect } from 'react-redux';

import { sendMessage, requestMessages } from '../actions/message_actions';
import Messages from './messages';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (message) => dispatch(sendMessage(message)),
  requestMessages: (channelId) => dispatch(requestMessages(channelId)),
});

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
