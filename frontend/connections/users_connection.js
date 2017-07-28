const channelName = "UsersChannel";

export const unsubscribeFromUsers = () => {
  window.App.cable.subscriptions.subscriptions.forEach((sub) => {
    if (JSON.parse(sub.identifier).channel === channelName) {
      window.App.cable.subscriptions.forget(sub);
    }
  });
};

export const subscribeToUsers = (action, teamId) => {
  const alreadySubscribed = window.App.cable.subscriptions.subscriptions.some((sub) => {
    const parsed = JSON.parse(sub.identifier);
    return parsed.channel === channelName && parsed.team_id === teamId;
  });

  if (!alreadySubscribed) {
    window.App.cable.subscriptions.create(
      {
        channel: channelName,
        team_id: teamId
      },
      {
        connected: function() {
          console.log(`Connected to users channel ${teamId}`);
        },
        disconnected: function() {},
        received: function(data) {
          action(JSON.parse(data));
        }
      }
    );
  }
};
