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

    // bind local functions
    this.getMessages = this.getMessages.bind(this);
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

  getMessages() {
    // If messages don't already exist in state get last few
    if (!this.props.messages[this.channelId]) {
      this.requestMessages(this.channelId);
    }
  }

  componentWillMount() {
    this.channelId = this.props.match.params.channelId;
    this.getMessages();
  }

  componentWillReceiveProps(newProps) {
    const oldChannelId = this.props.match.params.channelId;
    const newChannelId = newProps.match.params.channelId;

    // Always ensure the current channel id matches
    this.props.updateCurrentChannel(newChannelId);

    if (oldChannelId !== newChannelId) {
      this.markMessagesAsRead(oldChannelId);
      this.channelId = newChannelId;
      this.getMessages();
    }
  }

  render() {
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
    if (!this.props.messages[this.channelId]) {
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
    if (this.props.messages[this.channelId].length > 0) {
      messages = (
        <div id="messages-list" className="messages-list">
          <ul>
            {this.props.messages[this.channelId].map((m, i) => (
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

          <MessageFormContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(Messages);
