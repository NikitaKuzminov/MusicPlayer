export const getPlayingStatus = state => state.controls.play;
export const getVolume = state => state.controls.volume;

export const getCurrentTrack = state =>
  state.index.trackList[state.currentTrack - 1];
export const getCurrentTrackId = state => state.currentTrack;
export const getCurrentTrackLength = state => getCurrentTrack(state).length;

export const getTracks = state => state.index.trackList;
