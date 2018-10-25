import { createAction } from "redux-actions";

import { getTrackListOnSearch } from "../api/songs";

export const GET_TRACKLIST_REQUEST = "GET_TRACKLIST_REQUEST";
export const GET_TRACKLIST_SUCCESS = "GET_TRACKLIST_SUCCESS";
export const GET_TRACKLIST_FAILURE = "GET_TRACKLIST_FAILURE";

export const getTracklistRequest = createAction(GET_TRACKLIST_REQUEST);
export const getTracklistSuccess = createAction(GET_TRACKLIST_SUCCESS);
export const getTracklistFailure = createAction(GET_TRACKLIST_FAILURE);

export const fetchTracklist = value => dispatch => {
  dispatch(getTracklistRequest());
  getTrackListOnSearch(value)
    .then(json => dispatch(getTracklistSuccess(json)))
    .catch(error => getTracklistFailure());
};
