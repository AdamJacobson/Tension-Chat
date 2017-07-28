import React from 'react';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom';

import Message from './message';
import MessageFormContainer from './message_form_container';

class Messages extends React.Component {
  constructor(props) {
    super(props);

    // bind prop functions
    this.requestMessages = this.props.requestMessages.bind(this);
    this.markMessagesAsRead = this.props.markMessagesAsRead.bind(this);
    this.requestDirectMessages = this.props.requestDirectMessages.bind(this);

    // bind local functions
    this.getMessages = this.getMessages.bind(this);
    this.clearUnread = this.clearUnread.bind(this);
    this.messagesForChannel = this.messagesForChannel.bind(this);
  }

  componentDidUpdate(prevProps, nextProps) {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const messages = document.getElementById('messages-list');
    if (messages) {
      messages.scrollTop = messages.scrollHeight;
    }
  }

  isDirectMessages(channelId) {
    return (Number.isNaN(Number(this.channelId)));
  }

  getMessages() {
    if (!this.channelId) {

    } else if (this.isDirectMessages(this.channelId)) {
      if (!this.messagesForChannel(this.channelId)) {
        this.requestDirectMessages(this.channelId, this.props.match.params.teamId);
      }
    } else {
      if (!this.messagesForChannel(this.channelId)) {
        this.requestMessages(this.channelId);
      }
    }
  }

  componentWillMount() {
    this.channelId = this.props.match.params.channelId;
    this.getMessages();
  }

  componentWillReceiveProps(newProps) {
    const oldChannelId = this.props.match.params.channelId;
    const newChannelId = newProps.match.params.channelId;

    // Update if no channel
    if (!this.props.currentChannel && newChannelId) {
      this.props.updateCurrentChannel(newChannelId);
    }

    // update if new current channel
    if (oldChannelId !== newChannelId) {
      this.props.updateCurrentChannel(newChannelId);
      this.channelId = newChannelId;
      this.getMessages();

      if (oldChannelId) {
        this.markMessagesAsRead(oldChannelId);
      }
    }
  }

  clearUnread(channelId) {
    let messages = this.props.messages[channelId];
    if (messages && messages.unread !== 0) {
      this.props.clearUnreadFlag(channelId);
    }
  }

  messagesForChannel(channelId) {
    if (!this.props.messages[channelId]) {
      return null;
    }
    return this.props.messages[channelId].entities;
  }

  render() {
    this.clearUnread(this.channelId);
    
    // No channel selected
    if (!this.channelId) {
      return (
        <div className="messages-container">
          <div className="messages-empty">
            <h3>Please select or create a channel on the left.</h3>
          </div>
        </div>
      );
    }

    // Messages not loaded yet
    if (!this.messagesForChannel(this.channelId)) {
      return(
        <div className="messages-container">
          <div className="loader">
            <div className="loader-text">Loading...</div>
            <div className="spinner"></div>
          </div>
        </div>
      );
    }

    let messages;
    if (this.messagesForChannel(this.channelId).length > 0) {
      messages = (
        <div id="messages-list" className="messages-list">
          <ul>
            {this.messagesForChannel(this.channelId).map((m, i) => (
              <Message key={i} users={this.props.users} message={m}/>
            ))}
          </ul>
        </div>
      );
    } else {
      messages = (
        <div className="messages-empty">
          <h3>No messages have been posted yet.</h3>
        </div>
      );
    }

    return(
      <div className="messages-container">
        <div className="messages-content">
          {messages}

          <MessageFormContainer isDirectMessages={this.isDirectMessages(this.channelId)} />
        </div>
      </div>
    );
  }
}

export default withRouter(Messages);
