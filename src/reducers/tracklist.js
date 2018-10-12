import { combineReducers } from "redux";

import {
  GET_TRACKLIST_REQUEST,
  GET_TRACKLIST_SUCCESS,
  GET_TRACKLIST_FAILURE
} from "../actions/tracks";

const tracklist = (state = [], action) => {
  switch (action.type) {
    case GET_TRACKLIST_SUCCESS:
      return (state = action.tracklist);
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case GET_TRACKLIST_REQUEST:
      return true;
    case GET_TRACKLIST_SUCCESS:
    case GET_TRACKLIST_FAILURE:
      return false;
    default:
      return state;
  }
};

export default combineReducers({ tracklist, isLoading });
