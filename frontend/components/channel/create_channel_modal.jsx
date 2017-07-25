import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class CreateModal extends React.Component {
  constructor(props) {
    super(props);

    this.channelsComponent = this.props.channelsComponent;

    this.state = { name: "", description: "" };

    // bind props
    this.createChannel = this.props.createChannel.bind(this);

    // bind local
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const channel = {
      channel: {
        name: this.state.name,
        description: this.state.description,
        team_id: this.props.match.params.teamId
      }
    };
    this.createChannel(channel);
    this.props.closeAction();
  }

  render() {
    return(
      <Modal id="createModal" isOpen={this.channelsComponent.state.createModalOpen} contentLabel="Modal">
        <h3>Create a Channel</h3>

        <p>{"Channels are where your team communicates. They're best when organized around a topic."}</p>

        <form>
          <label>Name</label>
          <input className="channel-input"
            id="name"
            type="text"
            placeholder="# e.g. leads"
            value={this.state.name}
            onChange={this.handleChange}></input>
          <small>Names must be lowercase, without spaces or periods, and shorter than 22 characters.</small>

          <label>Purpose (optional)</label>
          <input className="channel-input"
            id="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}></input>
          <small>What's this channel about?</small>

          <button onClick={this.channelsComponent.closeCreateModal}>Cancel</button>
          <button onClick={this.handleSubmit}>Create Channel</button>
        </form>

        <button onClick={this.channelsComponent.closeCreateModal}>Close</button>
      </Modal>
    );
  }
}

export default withRouter(CreateModal);
