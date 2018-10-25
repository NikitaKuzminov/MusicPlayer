import { createAction } from "redux-actions";

export const CHOOSE_TRACK = "CHOOSE_TRACK";
export const NEXT_TRACK = "NEXT_TRACK";
export const PREVIOUS_TRACK = "PREVIOUS_TRACK";

export const chooseTrack = createAction(CHOOSE_TRACK);
export const nextTrack = createAction(NEXT_TRACK);
export const previousTrack = createAction(PREVIOUS_TRACK);
