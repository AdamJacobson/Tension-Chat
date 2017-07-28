
// These 2 methods do the same thing
export const objectifyUsers = (users) => {
  const objs = {};
  users.forEach((user) => {objs[user.id] = user;});
  return objs;
};

export const objectifyChannels = channels => {
  const objs = {};
  if (!channels) {
    return {};
  }
  channels.forEach((channel) => {objs[channel.id] = channel;});
  return objs;
};

// Given an array of objects, turn into object of objects with ids as keys
// If only one object, returns single object with id as key
export const objectify = (objects) => {
  if (objects instanceof Array) {
    const objs = {};
    objects.forEach((object) => {objs[object.id] = object;});
    return objs;
  }

  return { [objects.id]: objects };
};

// Given an object of objects with ids as keys, return array of objects
export const arrayify = objects => {
  let arr = [];
  Object.keys(objects).forEach((key) => arr.push(objects[key]));
  return arr;
};

export const conversations = messages => {
  let arr = [];
  Object.keys(messages).forEach((key) => {
    if (key.toString()[0] === '@') {
      arr.push({ name: key, unread: messages[key].unread });
    }
  });
  return arr;
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
