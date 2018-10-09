import React from "react";

import "./TrackControls.css";

const Controls = ({ playingStatus, playClick, nextClick, previousClick }) => (
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
      <i className="fas fa-backward" onClick={previousClick} />
    </span>
    <span className="control-buttons">
      <i className="fas fa-forward" onClick={nextClick} />
    </span>
  </div>
);

export default Controls;
