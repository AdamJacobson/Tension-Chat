import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestChannels } from '../actions/channel_actions';
import JoinChannelModal from './channels';

const mapStateToProps = state => ({
  team: state.team,
  allChannels: state.channels
});

const mapDispatchToProps = dispatch => ({
  createChannel: (data) => dispatch(),
  requestChannels: (id) => dispatch(requestChannels(id)),
  receiveSingleMessage: (message) => dispatch(receiveSingleMessage(message)),
  updateCurrentChannel: (id) => dispatch(updateCurrentChannel(id)),
  receiveSingleChannel: (channel) => dispatch(receiveSingleChannel(channel))
});

const ChannelsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinChannelModal);

export default ChannelsContainer;
