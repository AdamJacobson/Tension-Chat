import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import { leaveChannel } from '../actions/channel_actions';
import { objectifyChannels } from '../selectors/selectors';

import Header from './header';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentChannel: state.channels.currentChannel,
  channels: objectifyChannels(state.channels.entities)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  leaveChannel: (id) => dispatch(leaveChannel(id))
});

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default ChatContainer;
