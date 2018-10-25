import { combineReducers } from "redux";

import { handleAction } from "redux-actions";

import { playTrack, setVolume, setTime } from "../actions";

const play = handleAction(playTrack, state => !state, false);

const volume = handleAction(setVolume, (_, { payload }) => payload, 50);

const time = handleAction(setTime, (_, { payload }) => payload, 0);

export default combineReducers({ play, volume, time });
