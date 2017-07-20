export const fetchAllTeams = () => {
  return $.ajax({
    type: 'GET',
    url: '/api/teams'
  });
};
