import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestChannels, updateCurrentChannel, receiveSingleChannel }
  from '../actions/channel_actions';
import { receiveSingleMessage } from '../actions/message_actions';
import Channels from './channels';

const mapStateToProps = state => ({
  team: state.team,
  channels: state.channels,
  currentChannel: state.channels.currentChannel
});

const mapDispatchToProps = dispatch => ({
  requestChannels: (id) => dispatch(requestChannels(id)),
  receiveSingleMessage: (message) => dispatch(receiveSingleMessage(message)),
  updateCurrentChannel: (id) => dispatch(updateCurrentChannel(id)),
  receiveSingleChannel: (channel) => dispatch(receiveSingleChannel(channel))
});

const ChannelsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);

export default ChannelsContainer;
