import React from 'react';
import { connect } from 'react-redux';

import { sendMessage, requestMessages, markMessagesAsRead, requestDirectMessages }
  from '../actions/message_actions';
// import { requestDirectMessages } from '../actions/direct_message_actions';
import { updateCurrentChannel } from '../actions/channel_actions';
import { requestUsers } from '../actions/user_actions';
import Messages from './messages';

const mapStateToProps = state => ({
  messages: state.messages,
  directMessages: state.directMessages,
  users: state.users,
  currentChannel: state.channels.currentChannel
});

const mapDispatchToProps = dispatch => ({
  requestMessages: channelId => dispatch(requestMessages(channelId)),
  requestDirectMessages: (teamId, recipientId) => dispatch(requestDirectMessages(teamId, recipientId)),
  requestUsers: teamId => dispatch(requestUsers(teamId)),
  updateCurrentChannel: (id) => dispatch(updateCurrentChannel(id)),
  markMessagesAsRead: channelId => dispatch(markMessagesAsRead(channelId))
});

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
