import { combineReducers } from "redux";

import controls from "./controls";
import tracklist from "./tracklist";
import { currentTrack } from "./currentTrack";

export default combineReducers({ currentTrack, controls, tracklist });
