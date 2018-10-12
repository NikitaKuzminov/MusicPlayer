import React from "react";
import Controls from "./Controls/Controls";
import TrackList from "../containers/TrackList";
import SearchTrack from "../containers/SearchTrack";

const App = () => (
  <div>
    <h2 style={{ textAlign: "center" }}>Music Player</h2>
    <Controls />
    <SearchTrack />
    <TrackList />
  </div>
);

export default App;
