import React from 'react';
import { connect } from 'react-redux';

import { sendMessage } from '../actions/message_actions';
// import { requestUsers } from '../actions/user_actions';
import MessageForm from './message_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (message) => dispatch(sendMessage(message))
});

const MessageFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);

export default MessageFormContainer;
