import React from 'react';
import { connect } from 'react-redux';

import { createChannel, requestChannels } from '../actions/channel_actions';
import JoinChannelModal from './join_channel_modal';

const mapStateToProps = state => ({
  channels: state.channels
});

const mapDispatchToProps = dispatch => ({
  createChannel: (data) => dispatch(createChannel(data)),
  requestChannels: (id) => dispatch(requestChannels(id))
});

const JoinChannelModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinChannelModal);

export default JoinChannelModalContainer;
