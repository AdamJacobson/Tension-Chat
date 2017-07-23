import * as MessageActions from '../actions/message_actions';

export const unsubscribeFromMessages = () => {
  window.App.cable.subscriptions.subscriptions.forEach((sub) => {
    window.App.cable.subscriptions.forget(sub);
  });
};

export const subscribeToMessages = (action, channelId) => {
  const alreadySubscribed = window.App.cable.subscriptions.subscriptions.some((sub) => {
    return JSON.parse(sub.identifier).channel_id === channelId;
  });

  if (!alreadySubscribed) {
    window.App.messages = window.App.cable.subscriptions.create(
      {
        channel: "MessagesChannel",
        channel_id: channelId
      },
      {
        connected: function() {},
        disconnected: function() {},
        received: function(data) {
          action(JSON.parse(data));
        }
      }
    );
  }
};
