export const PLAY = "PLAY";
export const SET_VOLUME = "SET_VOLUME";

export const play = () => ({
  type: PLAY
});

export const setVolume = volume_value => ({
  type: SET_VOLUME,
  volume_value
});
