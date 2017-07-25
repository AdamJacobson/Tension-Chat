export const fetchAllChannelsForTeam = teamId => {
  return $.ajax({
    url: `/api/teams/${teamId}/channels`,
    type: 'GET'
  });
};

export const fetchJoinedChannelsForTeam = teamId => {
  return $.ajax({
    url: `/api/teams/${teamId}/channels/joined`,
    type: 'GET'
  });
};

export const fetchUnjoinedChannelsForTeam = teamId => {
  return $.ajax({
    url: `/api/teams/${teamId}/channels/unjoined`,
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

export const joinChannel = (channelId) => {
  return $.ajax({
    url: `/api/channels/${channelId}/membership`,
    type: 'POST',
    data: { membership: true }
  });
};

export const leaveChannel = (channelId) => {
  return $.ajax({
    url: `/api/channels/${channelId}/membership`,
    type: 'POST',
    data: { membership: false }
  });
};
