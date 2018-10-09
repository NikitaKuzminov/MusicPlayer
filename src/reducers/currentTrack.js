import { CHOOSE_TRACK } from "../actions/currentTrack";

export const currentTrack = (
  state = { trackName: "", authorName: "", length: "" },
  action
) => {
  switch (action.type) {
    case CHOOSE_TRACK:
      return action.currentTrack;
    default:
      return state;
  }
};
