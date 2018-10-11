import { setTime } from "./controls";
import { setAudio } from "./audio";

export const CHOOSE_TRACK = "CHOOSE_TRACK";
export const NEXT_TRACK = "NEXT_TRACK";
export const PREVIOUS_TRACK = "PREVIOUS_TRACK";

export const chooseTrack = (currentTrackId, audio) => dispatch => {
  //dispatch(setAudio(audio));
  dispatch(setTime(0));
  dispatch({
    type: CHOOSE_TRACK,
    currentTrackId
  });
  dispatch(
    setAudio(document.getElementsByClassName("audio")[currentTrackId - 1])
  );
};

export const nextTrack = () => dispatch => {
  dispatch(setTime(0));
  dispatch({ type: NEXT_TRACK });
};

export const previousTrack = () => dispatch => {
  dispatch(setTime(0));
  dispatch({ type: PREVIOUS_TRACK });
};
