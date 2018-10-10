export const PLAY = "PLAY";
export const SET_VOLUME = "SET_VOLUME";
export const SET_TIME = "SET_TIME";
export const RESET_TIME = "RESET_TIME";
export const SET_TIMER = "SET_TIMER";

export const play = () => ({
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

export const resetTime = time => ({
  type: RESET_TIME
});

export const setTimer = timer => ({
  type: SET_TIMER,
  timer
});
