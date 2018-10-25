import { handleActions } from "redux-actions";

import { chooseTrack, nextTrack, previousTrack } from "../actions";

export const currentTrack = handleActions(
  {
    [chooseTrack]: (_, { payload }) => payload,
    [nextTrack]: state => (state += 1),
    [previousTrack]: state => (state -= 1)
  },
  0
);
