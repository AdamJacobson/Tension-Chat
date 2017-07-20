import React from 'react';
import { connect } from 'react-redux';

// import { logout } from '../actions/session_actions';
import { requestChannels } from '../actions/channel_actions';
import Channels from './channels';

const mapStateToProps = state => ({
  team: state.team,
  channels: state.channels
});

const mapDispatchToProps = dispatch => ({
  requestChannels: (id) => dispatch(requestChannels(id))
});

const ChannelsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);

export default ChannelsContainer;
