import { createAction } from "redux-actions";

export const PLAY = "PLAY";
export const SET_VOLUME = "SET_VOLUME";
export const SET_TIME = "SET_TIME";
export const RESET_TIME = "RESET_TIME";

export const playTrack = createAction(PLAY);
export const setVolume = createAction(SET_VOLUME);
export const setTime = createAction(SET_TIME);
