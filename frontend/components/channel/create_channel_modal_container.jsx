import React from 'react';
import { connect } from 'react-redux';

// import { requestChannels, updateCurrentChannel, receiveSingleChannel }
//   from '../actions/channel_actions';
import { createChannel } from '../../actions/channel_actions';
import CreateModal from './create_channel_modal';

// const mapStateToProps = state => ({
//   team: state.team,
//   channels: state.channels
// });
//
const mapDispatchToProps = dispatch => ({
  createChannel: (data) => dispatch(createChannel(data))
});

const CreateChannelModalContainer = connect(
  null,
  mapDispatchToProps
)(CreateModal);

export default CreateChannelModalContainer;
