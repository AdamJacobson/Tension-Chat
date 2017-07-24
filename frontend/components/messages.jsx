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
    if (newProps.match.params.channelId !== this.props.match.params.channelId) {
      this.channelId = newProps.match.params.channelId;
      this.getMessages();
    }
  }

  render() {
    // No channel selected
    if (!this.channelId) {
      return (
        <div className="messages-container">
          <div>Please select or create a channel on the left.</div>
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

    return(
      <div className="messages-container">
        <div className="messages-content">
          <div  id="messages-list" className="messages-list">
            <ul>
              {this.props.messages[this.channelId].map((m, i) => (
                <Message key={i} users={this.props.users} message={m}/>
              ))}
            </ul>
          </div>

          <MessageFormContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(Messages);
