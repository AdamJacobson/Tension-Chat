export const fetchAllChannelsForTeam = teamId => {
  return $.ajax({
    url: `/api/teams/${teamId}/channels`,
    type: 'GET'
  });
};

export const fetchChannel = channelId => {
  return $.ajax({
    url: `/api/channels/${channelId}`,
    type: 'GET'
  });
};

export const createChannel = data => {
  return $.ajax({
    url: '/api/channels',
    type: 'POST',
    data
  });
};
