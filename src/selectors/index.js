export const getPlayingStatus = state => state.controls.play;
export const getVolume = state => state.controls.volume;
export const getTime = state => state.controls.time;
export const getTimerValue = state => state.controls.timer;

export const getCurrentTrack = state =>
  state.index.trackList[state.currentTrack - 1];
export const getCurrentTrackId = state => state.currentTrack;

export const getTracks = state => state.index.trackList;
