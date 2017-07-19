import React from 'react';
import ReactDOM from 'react-dom';

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
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO Replace hardcode with variable channel id
    const message = {
      message: {
        body: this.state.body,
        channel_id: 2,
        author_id: this.currentUser.id
        }
      };
    this.sendMessage(message);
    this.setState({ body: '' });
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  componentWillMount() {
    this.requestMessages(2);
  }

  render() {
    return(
      <div id="messages-container" className="messages">
        {this.currentUser.username}
        <ul>
          {this.props.messages.map((m, i) => <Message key={i} message={m}/>)}
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

export default Messages;
