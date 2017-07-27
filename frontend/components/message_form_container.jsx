import React from 'react';
import { connect } from 'react-redux';

import { sendMessage, sendDirectMessage } from '../actions/message_actions';
import MessageForm from './message_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentChannelId: state.channels.currentChannel
});

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message)),
  sendDirectMessage: message => dispatch(sendDirectMessage(message))
});

const MessageFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);

export default MessageFormContainer;
