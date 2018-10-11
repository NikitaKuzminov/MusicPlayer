import { SET_AUDIO } from "../actions/audio";

export const audio = (state = {}, action) => {
  switch (action.type) {
    case SET_AUDIO:
      return (state = action.audio);
    default:
      return state;
  }
};
