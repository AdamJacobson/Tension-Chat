import React from 'react';
import { connect } from 'react-redux';

import { createChannel } from '../actions/channel_actions';
import JoinChannelModal from './join_channel_modal';

// const mapStateToProps = state => ({
//   unjoinedChannels: state.channels.unjoined
// });

// const mapDispatchToProps = dispatch => ({
//   createChannel: (data) => dispatch(createChannel(data))
// });

const JoinChannelModalContainer = connect(
  null,
  null
)(JoinChannelModal);

export default JoinChannelModalContainer;
