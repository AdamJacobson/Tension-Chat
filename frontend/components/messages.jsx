import React from 'react';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom';

import Message from './message';

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: '' };
    this.currentUser = this.props.currentUser;

    this.requestMessages = this.props.requestMessages.bind(this);
    this.sendMessage = this.props.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = {
      message: {
        body: this.state.body,
        channel_id: this.channelId,
        author_id: this.currentUser.id
        }
      };
    this.sendMessage(message);
    this.setState({ body: '' });
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  getMessages() {
    // If messages don't already exist in state
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
      // this.requestMessages(newProps.match.params.channelId);
      this.channelId = newProps.match.params.channelId;
      this.getMessages();
    }
  }

  render() {
    // No channel selected
    if (!this.channelId) {
      return (
        <div id="messages-container" className="messages">
          <div>Please select or create a channel on the left.</div>
        </div>
      );
    }

    // Messages not loaded yet
    if (!this.props.messages[this.channelId]) {
      return(
        <div id="messages-container" className="messages">
          <div>Messages Loading...</div>
        </div>
      );
    }

    return(
      <div id="messages-container" className="messages">
        <ul>
          {this.props.messages[this.channelId].map((m, i) => <Message key={i} message={m}/>)}
        </ul>

        <form className="message-form">
          <input className="message-input"
            id="message"
            type="text"
            placeholder="message"
            value={this.state.body}
            onChange={this.handleChange}></input>

          <button onClick={this.handleSubmit}></button>
        </form>

      </div>
    );
  }
}

export default withRouter(Messages);
