import * as MessageActions from '../actions/message_actions';

const channelName = "DirectMessagesChannel";

export const unsubscribeFromDirectMessages = () => {
  window.App.cable.subscriptions.subscriptions.forEach((sub) => {
    if (JSON.parse(sub.identifier).channel === channelName) {
      window.App.cable.subscriptions.forget(sub);
    }
  });
};

export const subscribeToDirectMessages = (action, teamId, recipientId) => {
  const alreadySubscribed = window.App.cable.subscriptions.subscriptions.some((sub) => {
    const parsed = JSON.parse(sub.identifier);
    return parsed.channel_id === recipientId && parsed.team_id === teamId;
  });

  if (!alreadySubscribed) {
    window.App.cable.subscriptions.create(
      {
        channel: channelName,
        team_id: teamId,
        recipient_id: recipientId
      },
      {
        connected: function() {
          console.log(`Connected to direct messages channel, team_id: ${teamId}, recId: ${recipientId}`);
        },
        disconnected: function() {},
        received: function(data) {
          action(JSON.parse(data));
        }
      }
    );
  }
};
