import React from "react";

const VolumeControls = ({ volume, setVolume, audio }) => (
  <div>
    <i className="fas fa-volume-up" />
    <input
      value={volume}
      type="range"
      step={5}
      onChange={e => setVolume(e.target.value)}
      style={{ width: "60%" }}
    />
  </div>
);

export default VolumeControls;
