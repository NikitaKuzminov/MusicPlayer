export const SET_VOLUME = "SET_VOLUME";

export const ADD_TRACK = "ADD_TRACK";

export const setVolume = volume_value => ({
  type: SET_VOLUME,
  volume_value
});

export const addTrack = track => ({
  type: ADD_TRACK,
  track
});
