import { combineReducers } from "redux";

import {
  PLAY,
  SET_VOLUME,
  SET_TIME,
  TIMER_START,
  //TIMER_TICK,
  TIMER_SET_VALUE
  //TIMER_STOP
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
    default:
      return state;
  }
};

const timer = (state = 0, action) => {
  switch (action.type) {
    case TIMER_START:
      return action.time;
    case TIMER_SET_VALUE:
      return action.time;
    default:
      return state;
  }
};

// const timer = (state = 0, action) => {
//   switch (action.type) {
//     case TIMER_START:
//       return (state = action.time);
//     case TIMER_TICK:
//       return state + 1;
//     case TIMER_SET_VALUE:
//       return (state = action.time);
//     case TIMER_STOP:
//       return (state = 0);
//     default:
//       return state;
//   }
// };

export default combineReducers({ play, volume, time, timer });
