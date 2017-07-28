import React from 'react';
import { connect } from 'react-redux';

import { sendMessage, requestMessages, markMessagesAsRead, requestDirectMessages, clearUnreadFlag }
  from '../actions/message_actions';
import { updateCurrentChannel } from '../actions/channel_actions';
import { requestUsers } from '../actions/user_actions';
import Messages from './messages';

const mapStateToProps = state => ({
  currentChannel: state.channels.currentChannel,
  directMessages: state.directMessages,
  messages: state.messages,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  requestDirectMessages: (recipientId, teamId) => dispatch(requestDirectMessages(recipientId, teamId)),
  markMessagesAsRead: channelId => dispatch(markMessagesAsRead(channelId)),
  clearUnreadFlag: (channelId) => dispatch(clearUnreadFlag(channelId)),
  requestMessages: channelId => dispatch(requestMessages(channelId)),
  updateCurrentChannel: (id) => dispatch(updateCurrentChannel(id)),
  requestUsers: teamId => dispatch(requestUsers(teamId)),

});

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
