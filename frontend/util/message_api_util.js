
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
