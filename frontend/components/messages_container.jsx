import React from 'react';
import { connect } from 'react-redux';

import { sendMessage, requestMessages, markMessagesAsRead } from '../actions/message_actions';
import { updateCurrentChannel } from '../actions/channel_actions';
import { requestUsers } from '../actions/user_actions';
import Messages from './messages';

const mapStateToProps = state => ({
  messages: state.messages,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  requestMessages: channelId => dispatch(requestMessages(channelId)),
  requestUsers: teamId => dispatch(requestUsers(teamId)),
  updateCurrentChannel: (id) => dispatch(updateCurrentChannel(id)),
  markMessagesAsRead: channelId => dispatch(markMessagesAsRead(channelId))
});

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
