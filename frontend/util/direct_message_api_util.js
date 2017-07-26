export const getConversation = (teamId, userId) => {
  return $.ajax({
    url: `/api/teams/${teamId}/direct_messages/${userId}`,
    type: "GET"
  });
};
