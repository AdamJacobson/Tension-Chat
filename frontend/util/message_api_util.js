
const fetchMessages = channelId => {
  $.ajax({
    url: `api/messages/${channelId}`,
    type: 'GET'
  });
};

const sendMessage = message => {
  $.ajax({
    url: 'api/messages/',
    type: 'POST',
    data: message
  });
};
