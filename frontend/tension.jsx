import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// import * as ChannelActions from './actions/channel_actions';
import * as MessageActions from './actions/message_actions';
// import * as TeamActions from './actions/team_actions';
// import * as UserActions from './actions/user_actions';

// import subscribeToMessages from './connections/messages_connection';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // window.ChannelActions = ChannelActions;
  window.MessageActions = MessageActions;
  // window.TeamActions = TeamActions;
  // window.UserActions = UserActions;
  
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
