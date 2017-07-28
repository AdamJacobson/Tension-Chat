import * as MessageActions from '../actions/message_actions';

const channelName = "MessagesChannel";

export const unsubscribeFromMessages = () => {
  window.App.cable.subscriptions.subscriptions.forEach((sub) => {
    if (JSON.parse(sub.identifier).channel === channelName) {
      window.App.cable.subscriptions.forget(sub);
    }
  });
};

export const subscribeToMessages = (action, channelId) => {
  const alreadySubscribed = window.App.cable.subscriptions.subscriptions.some((sub) => {
    return JSON.parse(sub.identifier).channel_id === channelId;
  });

  if (!alreadySubscribed) {
    window.App.cable.subscriptions.create(
      {
        channel: channelName,
        channel_id: channelId
      },
      {
        connected: function() {
          // console.log(`Connected to message channel ${channelId}`);
        },
        disconnected: function() {},
        received: function(data) {
          action(JSON.parse(data));
        }
      }
    );
  }
};
