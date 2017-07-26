export const fetchTeamsForCurrentUser = () => {
  return $.ajax({
    type: 'GET',
    url: '/api/teams'
  });
};

export const fetchSingleTeam = (teamId) => {
  return $.ajax({
    type: 'GET',
    url: `/api/teams/${teamId}`
  });
};
