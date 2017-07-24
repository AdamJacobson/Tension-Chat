export const objectifyUsers = (users) => {
  const objs = {};
  users.forEach((user) => {objs[user.id] = user;});
  return objs;
};

export const markUnread = (messages) => {
  if (messages instanceof Array) {
    messages.forEach((message) => {
      message.read = false;
    });
  } else {
    messages.read = false;
  }
  return messages;
};

export const markRead = (messages) => {
  if (messages instanceof Array) {
    messages.forEach((message) => {
      message.read = true;
    });
  } else {
    messages.read = true;
  }
  return messages;
};
