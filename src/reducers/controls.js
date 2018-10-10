import { combineReducers } from "redux";

import {
  PLAY,
  SET_VOLUME,
  SET_TIME,
  RESET_TIME,
  SET_TIMER
} from "../actions/controls";

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

const time = (state = 0, action) => {
  switch (action.type) {
    case SET_TIME:
      return action.time;
    case RESET_TIME:
      return 0;
    default:
      return state;
  }
};

const timer = (state = {}, action) => {
  switch (action.type) {
    case SET_TIMER:
      return action.timer;
    default:
      return state;
  }
};

export default combineReducers({ play, volume, time, timer });
