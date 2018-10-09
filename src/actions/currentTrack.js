export const CHOOSE_TRACK = "CHOOSE_TRACK";
export const NEXT_TRACK = "NEXT_TRACK";
export const PREVIOUS_TRACK = "PREVIOUS_TRACK";

export const chooseTrack = currentTrackId => ({
  type: CHOOSE_TRACK,
  currentTrackId
});

export const nextTrack = () => ({
  type: NEXT_TRACK
});

export const previousTrack = () => ({
  type: PREVIOUS_TRACK
});
