import { combineReducers } from "redux";

import { PLAY, SET_VOLUME } from "../actions/controls";

const play = (state = false, action) => {
  switch (action.type) {
    case PLAY:
      return !state;
    default:
      return state;
  }
};

const volume = (state = 50, action) => {
  switch (action.type) {
    case SET_VOLUME:
      return action.volume_value;
    default:
      return state;
  }
};

export default combineReducers({ play, volume });
