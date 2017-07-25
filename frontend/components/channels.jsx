import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

import { subscribeToMessages } from '../connections/messages_connection';
import { subscribeToChannels } from '../connections/channels_connection';

import JoinChannelModalContainer from './join_channel_modal_container';
import CreateChannelModalContainer from './channel/create_channel_modal_container';

class Channels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      createModalOpen: false,
      joinModalOpen: false,
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
    if (!newProps.channels.entities) {
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
    const channelId = this.props.currentChannel;

    // Do this to prevent early AJAX calls inside the modal
    let joinModal;
    if (this.state.joinModalOpen) {
      joinModal = (
        <JoinChannelModalContainer
          closeAction={this.closeJoinModal}
          channelsComponent={this}
          isOpen={this.state.joinModalOpen}
          contentLabel="Modal"/>
      );
    }

    let channels;
    if (!this.props.channels.entities) {
      channels = [];
    } else {
      channels = this.props.channels.entities;
    }

    return(
      <div className="channel-group">

        <CreateChannelModalContainer
          channelsComponent={this}
          isOpen={this.state.createModalOpen}
          closeAction={this.closeCreateModal}
          contentLabel="Modal"/>

        {joinModal}

        <h4 className="channel-type-header">
          <span className="clickable" onClick={this.openJoinModal}>CHANNELS</span>
          <i onClick={this.openCreateModal} className="fa fa-plus-circle fa-lg clickable" aria-hidden="true"></i>
        </h4>

        <ul className="channel-list">
          {channels.map((ch, i) => {
            let classes = "channel-item";
            if (channelId === ch.id) {
              classes += " channel-selected";
            }
            return(
              <li className={classes} key={i}>
                <Link onClick={() => this.updateCurrentChannel(ch.id)}
                      className="channel-link"
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

export default withRouter(Channels);
