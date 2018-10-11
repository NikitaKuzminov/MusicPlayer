export const PLAY = "PLAY";
export const SET_VOLUME = "SET_VOLUME";
export const SET_TIME = "SET_TIME";
export const RESET_TIME = "RESET_TIME";

export const TIMER_START = "TIMER_START";
//export const TIMER_TICK = "TIMER_TICK";
export const TIMER_SET_VALUE = "TIMER_SET_VALUE";
//export const TIMER_STOP = "TIMER_STOP";

export const playTrack = () => ({
  type: PLAY
});

export const setVolume = volume_value => ({
  type: SET_VOLUME,
  volume_value
});

export const setTime = time => ({
  type: SET_TIME,
  time
});

export const timerStart = time => ({
  type: TIMER_START,
  time
});

export const timerSetValue = time => ({
  type: TIMER_SET_VALUE,
  time
});

// let timer = null;
// export const timerStart = time => dispatch => {
//   clearInterval(timer);
//   timer = setInterval(() => dispatch(timerTick()), 1000);
//   dispatch({ type: TIMER_START, time });
//   dispatch(timerTick());
// };

// export const timerTick = () => ({ type: TIMER_TICK });

// export const timerSetValue = time => ({ type: TIMER_SET_VALUE, time });

// export const timerStop = () => {
//   clearInterval(timer);
//   return { type: TIMER_STOP };
// };
