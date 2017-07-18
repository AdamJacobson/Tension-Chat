export const signup = (userdata) => {
  return $.ajax({
    url: '/api/users',
    type: 'POST',
    data: userdata
  });
};

export const login = (userdata) => {
  return $.ajax({
    url: 'api/session',
    type: 'POST',
    data: userdata
  });
};

export const logout = () => {
  return $.ajax({
    url: 'api/session',
    type: 'DELETE'
  });
};
