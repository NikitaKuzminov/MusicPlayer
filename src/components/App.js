import React from "react";
import Controls from "./Controls/Controls";
import TrackList from "../containers/TrackList";

const App = () => (
  <div>
    <h2>Music Player</h2>
    <Controls />
    <TrackList />
  </div>
);

export default App;
