import React from 'react';
import { connect } from 'react-redux';

import { updateCurrentChannel } from '../actions/channel_actions';
import { arrayify, conversations } from '../selectors/selectors';

import DirectMessages from './direct_messages';

const mapStateToProps = state => ({
  currentChannel: state.channels.currentChannel,
  conversations: conversations(state.messages),
  currentUser: state.session.currentUser,
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
