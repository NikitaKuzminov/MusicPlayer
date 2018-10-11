import React from "react";
import Controls from "./Controls/Controls";
import TrackList from "../containers/TrackList";

const App = () => (
  <div>
    <h2 style={{ textAlign: "center" }}>Music Player</h2>
    <audio controls>
      <source src="http://listen.vo.llnwd.net/g3/4/9/4/7/4/1442647494.mp3" />
    </audio>
    <Controls />
    <TrackList />
  </div>
);

export default App;
