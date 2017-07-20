import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import * as MessageActions from './actions/message_actions';
import * as TeamActions from './actions/team_actions';
// import * as ChannelUtil from './util/channel_api_util';

import Root from './components/root';

const getPreloadedState = () => {
  let team, session;
  if (window.currentTeam) {
    team = window.currentTeam;
  }
  if (window.currentUser) {
    session = { currentUser: window.currentUser };
  }
  // debugger;
  if (session && team) {
    return { session, team };
  }

  return null;
};

document.addEventListener('DOMContentLoaded', () => {
  let store;
  // const preloadedState = getPreloadedState();
  // if (preloadedState) {
  //   store = configureStore(preloadedState);
  // } else {
  //   store = configureStore();
  // }

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.TeamActions = TeamActions;
  // window.ChannelUtil = ChannelUtil;

  window.MessageActions = MessageActions;

  window.dispatch = store.dispatch;
  window.getState = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
