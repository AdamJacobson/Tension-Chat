export const fetchDirectMessages = (teamId, recipient) => {
  return $.ajax({
    url: `/api/teams/${teamId}/direct_messages/${recipient}`,
    type: "GET"
  });
};
