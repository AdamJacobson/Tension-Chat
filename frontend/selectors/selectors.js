export const objectifyUsers = (users) => {
  const objs = {};
  users.forEach((user) => {objs[user.id] = user;});
  return objs;
};
