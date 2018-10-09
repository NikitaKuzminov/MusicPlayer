import React from "react";
import TrackControls from "../../containers/TrackControls";
import Volume from "../../containers/Volume";
import CurrentTrack from "../../containers/CurrentTrack";
import TimelineControl from "../../containers/TimelineControl";
import Timeline from "../Timeline/Timeline";

import "./Controls.css";

const Controls = () => (
  <div className="controls">
    <TrackControls />
    <CurrentTrack />
    <Timeline />
    <Volume />
    <TimelineControl />
  </div>
);

export default Controls;
