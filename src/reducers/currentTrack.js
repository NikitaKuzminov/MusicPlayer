import {
  CHOOSE_TRACK,
  NEXT_TRACK,
  PREVIOUS_TRACK
} from "../actions/currentTrack";

export const currentTrack = (state = 0, action) => {
  switch (action.type) {
    case CHOOSE_TRACK:
      return action.currentTrackId;
    case NEXT_TRACK:
      return state + 1;
    case PREVIOUS_TRACK:
      return state - 1;
    default:
      return state;
  }
};
