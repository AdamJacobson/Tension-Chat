export const fetchMessages = channelId => {
  return $.ajax({
    url: `api/channels/${channelId}/messages`,
    type: 'GET'
  });
};

export const sendMessage = message => {
  return $.ajax({
    url: 'api/messages/',
    type: 'POST',
    data: message
  });
};

export const fetchDirectMessages = (recipient, teamId) => {
  return $.ajax({
    url: `/api/teams/${teamId}/direct_messages/${recipient}`,
    type: 'GET'
  });
};

export const sendDirectMessage = message => {
  return $.ajax({
    url: `/api/direct_messages`,
    type: 'POST',
    data: message
  });
};
