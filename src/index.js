import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

import { songs } from "./api/songs";
import { addTrack } from "./actions/";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

songs.map(song => store.dispatch(addTrack(song)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
