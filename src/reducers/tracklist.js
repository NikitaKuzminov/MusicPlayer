import { combineReducers } from "redux";

import { handleAction, handleActions } from "redux-actions";

import {
  getTracklistRequest,
  getTracklistSuccess,
  getTracklistFailure
} from "../actions";

const tracklist = handleAction(
  getTracklistSuccess,
  (_, { payload }) => payload,
  []
);

const isLoading = handleActions(
  {
    [getTracklistRequest]: () => true,
    [getTracklistSuccess]: () => false,
    [getTracklistFailure]: () => false
  },
  false
);

export default combineReducers({ tracklist, isLoading });
