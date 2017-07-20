// import * as Actions from '../actions/message_actions';

const defaultState = {
  name: "",
  channels: { },
  currentChannel: null,
  members: { }
};

const teamReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default teamReducer;
