import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

import { subscribeToMessages } from '../connections/messages_connection';
import { subscribeToChannels } from '../connections/channels_connection';

import JoinChannelModalContainer from './join_channel_modal_container';

class Channels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      createModalOpen: false,
      joinModalOpen: false
    };

    this.closeCreateModal = this.closeCreateModal.bind(this);
    this.openCreateModal = this.openCreateModal.bind(this);

    this.closeJoinModal = this.closeJoinModal.bind(this);
    this.openJoinModal = this.openJoinModal.bind(this);
  }

  closeCreateModal() {
    this.setState({ createModalOpen: false });
  }

  openCreateModal() {
    this.setState({ createModalOpen: true });
  }

  closeJoinModal() {
    this.setState({ joinModalOpen: false });
  }

  openJoinModal() {
    this.setState({ joinModalOpen: true });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.channels.entities.length === 0) {
      newProps.requestChannels(newProps.team.id);
    } else {
      newProps.channels.entities.forEach((channel) => {
        subscribeToMessages(this.props.receiveSingleMessage, channel.id);
      });
    }

    if (newProps.team.id !== this.props.team.id) {
      // subscribeToChannels(this.props.receiveSingleChannel, this.props.match.params.teamId);
    }
  }

  updateCurrentChannel(id) {
    this.props.updateCurrentChannel(id);
  }

  render() {
    return(
      <div className="channel-group">

        <CreateModal channelsComponent={this} isOpen={this.state.createModalOpen} contentLabel="Modal"/>

        <JoinChannelModalContainer closeAction={this.closeJoinModal} channelsComponent={this} isOpen={this.state.joinModalOpen} contentLabel="Modal"/>

        <h4 className="channel-type-header">
          <span className="clickable" onClick={this.openJoinModal}>CHANNELS</span>
          <i onClick={this.openCreateModal} className="fa fa-plus-circle fa-lg clickable" aria-hidden="true"></i>
        </h4>

        <ul className="channel-list">
          {this.props.channels.entities.map((ch, i) => {
            let classes = "channel-link";
            if (this.props.channels.currentChannel === ch.id) {
              classes += " active";
            }
            return(
              <li className="channel-item" key={i}>
                <Link onClick={() => this.updateCurrentChannel(ch.id)}
                      className={classes}
                      to={`/teams/${this.props.team.id}/messages/${ch.id}`}>
                  # {ch.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const CreateModal = ({ channelsComponent }) => {
  return(
    <Modal id="createModal" isOpen={channelsComponent.state.createModalOpen} contentLabel="Modal">
      <h3>Create a new Channel</h3>

      <button onClick={channelsComponent.closeCreateModal}>Close</button>
    </Modal>
  );
};

const JoinModal = ({ channelsComponent }) => {
  return(
    <Modal id="joinModal" isOpen={channelsComponent.state.joinModalOpen} contentLabel="Modal">
      <h3>Join a Channel___</h3>

      <form>
        <select>

        </select>
      </form>

      <button onClick={channelsComponent.closeJoinModal}>Close</button>
    </Modal>
  );
};

export default withRouter(Channels);
