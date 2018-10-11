import React from "react";

const onClick = (setVolume, sliderValue, audio) => {
  setVolume(sliderValue);
  audio.volume = sliderValue / 100;
};

const VolumeControls = ({ volume, setVolume, audio }) => (
  <div>
    <i className="fas fa-volume-up" />
    <input
      value={volume}
      type="range"
      step={5}
      onChange={e => onClick(setVolume, e.target.value, audio)}
      style={{ width: "60%" }}
    />
  </div>
);

export default VolumeControls;
