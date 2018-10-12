import { setTime } from "./controls";

export const CHOOSE_TRACK = "CHOOSE_TRACK";
export const NEXT_TRACK = "NEXT_TRACK";
export const PREVIOUS_TRACK = "PREVIOUS_TRACK";

export const chooseTrack = currentTrackId => dispatch => {
  dispatch({
    type: CHOOSE_TRACK,
    currentTrackId
  });
};

export const nextTrack = () => dispatch => {
  dispatch(setTime(0));
  dispatch({ type: NEXT_TRACK });
};

export const previousTrack = () => dispatch => {
  dispatch(setTime(0));
  dispatch({ type: PREVIOUS_TRACK });
};
