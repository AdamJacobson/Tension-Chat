const channelName = "ChannelsChannel";

export const unsubscribeFromChannels = () => {
  window.App.cable.subscriptions.subscriptions.forEach((sub) => {
    if (JSON.parse(sub.identifier).channel === channelName) {
      window.App.cable.subscriptions.forget(sub);
    }
  });
};

// Subscribe to all channel updates for the team
export const subscribeToChannels = (action, teamId) => {
  const alreadySubscribed = window.App.cable.subscriptions.subscriptions.some((sub) => {
    return JSON.parse(sub.identifier).team_id === teamId;
  });

  if (!alreadySubscribed) {
    window.App.cable.subscriptions.create(
      {
        channel: channelName,
        team_id: teamId
      },
      {
        connected: function() {
          console.log(`Connected to teams channel ${teamId}`);
        },
        disconnected: function() {},
        received: function(data) {
          action(JSON.parse(data));
        }
      }
    );
  }
};
