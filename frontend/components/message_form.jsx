import React from 'react';
import ReactDOM from 'react-dom';
import { Route, withRouter } from 'react-router-dom';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { body: '' };
    this.currentUser = this.props.currentUser;

    // bind prop functions
    this.sendMessage = this.props.sendMessage.bind(this);

    // bind local functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  componentWillMount() {
    this.channelId = this.props.match.params.channelId;
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.channelId !== this.props.match.params.channelId) {
      this.channelId = newProps.match.params.channelId;
    }
  }

  render() {
    return(
      <form className="message-form">
        <input className="message-input"
          id="message"
          type="text"
          placeholder="message"
          value={this.state.body}
          onChange={this.handleChange}></input>

        <button className="message-submit" onClick={this.handleSubmit}></button>
      </form>
    );
  }
}

export default withRouter(MessageForm);
