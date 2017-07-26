import * as ChannelAPI from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_UNJOINED_CHANNELS = "RECEIVE_UNJOINED_CHANNELS";
export const RECEIVE_SINGLE_CHANNEL = "RECEIVE_SINGLE_CHANNEL";
export const REMOVE_SINGLE_CHANNEL = "REMOVE_SINGLE_CHANNEL";
export const UPDATE_CHANNEL_ID = "UPDATE_CHANNEL_ID";

// Needs to be changed to receive only joined
export const receiveChannels = channels => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  };
};

export const receiveUnjoinedChannels = channels => {
  return {
    type: RECEIVE_UNJOINED_CHANNELS,
    channels
  };
};

export const receiveSingleChannel = channel => {
  return {
    type: RECEIVE_SINGLE_CHANNEL,
    channel
  };
};

export const removeSingleChannel = channelId => {
  return {
    type: REMOVE_SINGLE_CHANNEL,
    channelId
  };
};

export const updateCurrentChannel = channelId => {
  if (channelId === undefined) {
    return {
      type: UPDATE_CHANNEL_ID,
      channelId: ""
    };
  } else {
    return {
      type: UPDATE_CHANNEL_ID,
      channelId: Number.parseInt(channelId)
    };
  }
};

export const joinChannel = channelId => dispatch => {
  const success = response => dispatch(receiveSingleChannel(response));
  const failure = response => {debugger;};

  ChannelAPI.joinChannel(channelId).then(success, failure);
};

export const leaveChannel = channelId => dispatch => {
  const success = response => dispatch(removeSingleChannel(channelId));
  const failure = response => {debugger;};

  ChannelAPI.leaveChannel(channelId).then(success, failure);
};

export const createChannel = (data) => dispatch => {
  const success = response => dispatch(receiveSingleChannel(response));
  const failure = response => {debugger;};

  ChannelAPI.createChannel(data).then(success, failure);
};

export const requestChannels = (teamId) => dispatch => {
  const success = response => dispatch(receiveChannels(response));
  const failure = response => {debugger;};

  ChannelAPI.fetchJoinedChannelsForTeam(teamId).then(success, failure);
};
