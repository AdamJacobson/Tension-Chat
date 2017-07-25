import React from 'react';
import { connect } from 'react-redux';

import { joinChannel } from '../actions/channel_actions';
import JoinChannelModal from './join_channel_modal';

// const mapStateToProps = state => ({
//   unjoinedChannels: state.channels.unjoined
// });

const mapDispatchToProps = dispatch => ({
  joinChannel: (channelId) => dispatch(joinChannel(channelId))
});

const JoinChannelModalContainer = connect(
  null,
  mapDispatchToProps
)(JoinChannelModal);

export default JoinChannelModalContainer;
