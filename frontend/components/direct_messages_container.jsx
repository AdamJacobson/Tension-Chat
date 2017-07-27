import React from 'react';
import { connect } from 'react-redux';

import { updateCurrentChannel } from '../actions/channel_actions';
import { arrayify } from '../selectors/selectors';

import DirectMessages from './direct_messages';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentChannel: state.channels.currentChannel,
  users: arrayify(state.users),
  team: state.team
});

// const mapDispatchToProps = dispatch => ({
//   updateCurrentChannel: (id) => dispatch(updateCurrentChannel(id))
// });

const DirectMessagesContainer = connect(
  mapStateToProps,
  null
)(DirectMessages);

export default DirectMessagesContainer;
