import { getTrackListOnSearch } from "../api/songs";

export const GET_TRACKLIST_REQUEST = "GET_TRACKLIST_REQUEST";
export const GET_TRACKLIST_SUCCESS = "GET_TRACKLIST_SUCCESS";
export const GET_TRACKLIST_FAILURE = "GET_TRACKLIST_FAILURE";

const getTracklistRequest = () => ({
  type: GET_TRACKLIST_REQUEST
});

const getTracklistSuccess = json => {
  console.log(json.search.data.tracks);
  return {
    type: GET_TRACKLIST_SUCCESS,
    tracklist: json.search.data.tracks
  };
};

const getTracklistFailure = () => ({
  type: GET_TRACKLIST_FAILURE
});

export const fetchTracklist = value => dispatch => {
  dispatch(getTracklistRequest());
  getTrackListOnSearch(value)
    .then(json => dispatch(getTracklistSuccess(json)))
    .catch(error => getTracklistFailure());
};
