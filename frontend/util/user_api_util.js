export const fetchAllUsersForTeam = teamId => {
  return $.ajax({
    url: `/api/teams/${teamId}/users`,
    type: 'GET'
  });
};

export const fetchUser = userId => {
  return $.ajax({
    url: `/api/users/${userId}`,
    type: 'GET'
  });
};
