import * as ChannelAPI from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_SINGLE_CHANNEL = "RECEIVE_SINGLE_CHANNEL";

export const receiveChannels = channels => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  };
};

export const receiveSingleChannel = channel => {
  return {
    type: RECEIVE_SINGLE_CHANNEL,
    channel
  };
};

export const requestChannels = (teamId) => dispatch => {
  const success = response => dispatch(receiveChannels(response));
  const failure = response => {debugger;};

  ChannelAPI.fetchAllChannelsForTeam(teamId).then(success, failure);
};

// export const requestSingleTeam = (teamId) => dispatch => {
//   const success = response => dispatch(receiveSingleTeam(response));
//   const failure = response => {debugger;};
//
//   ChannelAPI.fetchSingleTeam(teamId).then(success, failure);
// };
