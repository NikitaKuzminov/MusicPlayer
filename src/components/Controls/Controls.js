import React from "react";
import TrackControls from "../../containers/TrackControls";
import Volume from "../../containers/Volume";
import CurrentTrack from "../../containers/CurrentTrack";
import TimelineControl from "../../containers/TimelineControl";

import "./Controls.css";

const Controls = () => (
  <div className="controls">
    <TrackControls />
    <CurrentTrack />
    <TimelineControl />
    <Volume />
  </div>
);

export default Controls;
