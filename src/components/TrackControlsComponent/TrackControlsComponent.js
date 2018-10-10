import React from "react";

import "./TrackControls.css";

const Controls = ({ playingStatus, playClick, nextClick, previousClick }) => {
  const playButton = playingStatus ? "fas fa-pause" : "fas fa-play";
  return (
    <div className="controls">
      <span className="control-buttons">
        <i className={playButton} onClick={playClick} />
      </span>

      <span className="control-buttons">
        <i className="fas fa-backward" onClick={previousClick} />
      </span>
      <span className="control-buttons">
        <i className="fas fa-forward" onClick={nextClick} />
      </span>
    </div>
  );
};

export default Controls;
