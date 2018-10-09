import React from "react";

import "./TrackControls.css";

const Controls = ({ playingStatus, playClick }) => (
  <div className="controls">
    {playingStatus ? (
      <span className="control-buttons">
        <i className="fas fa-pause" onClick={playClick} />
      </span>
    ) : (
      <span className="control-buttons">
        <i className="fas fa-play" onClick={playClick} />
      </span>
    )}

    <span className="control-buttons">
      <i className="fas fa-backward" />
    </span>
    <span className="control-buttons">
      <i className="fas fa-forward" />
    </span>
  </div>
);

export default Controls;
