import { combineReducers } from "redux";

import { ADD_TRACK } from "../actions";

import controls from "./controls";
import { currentTrack } from "./currentTrack";
import { audio } from "./audio";

const index = (state = { trackList: [] }, action) => {
  switch (action.type) {
    case ADD_TRACK:
      return {
        ...state,
        trackList: [...state.trackList, action.track]
      };
    default:
      return state;
  }
};

export default combineReducers({ index, currentTrack, controls, audio });
