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
    if (e.which === 13) {
      console.log("Return");
    }
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
    this.setState({ name: "", description: "" });
    this.props.closeAction();
  }

  render() {
    return(
      <Modal id="createModal" isOpen={this.channelsComponent.state.createModalOpen} contentLabel="Modal">
        <div className="modal-content">

          <button className="close-button" onClick={this.channelsComponent.closeCreateModal}>
            <i className="fa fa-times fa-3x" aria-hidden="true"></i>
          </button>

          <h3>Create a Channel</h3>

          <small>{"Channels are where your team communicates. They're best when organized around a topic."}</small>

          <form className="channel-form">
            <label className="channel-label">Name</label>
            <input className="channel-input"
              id="name"
              type="text"
              placeholder="# e.g. leads"
              value={this.state.name}
              onChange={this.handleChange}></input>
            <small>Names must be lowercase, without spaces or periods, and shorter than 22 characters.</small>

            <br />

            <label className="channel-label">Purpose (optional)</label>
            <input className="channel-input"
              id="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}></input>
            <small>What's this channel about?</small>

            <br />
            <br />

            <div className="channel-buttons">
              <button className="button-confirm" id="submit" onClick={this.handleSubmit}>Create Channel</button>
              <button className="button-cancel" id="cancel" onClick={this.channelsComponent.closeCreateModal}>Cancel</button>
            </div>
          </form>

        </div>
      </Modal>
    );
  }
}

export default withRouter(CreateModal);
