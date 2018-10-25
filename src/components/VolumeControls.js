import React from "react";

import styled from "styled-components";

const RangeInput = styled.input.attrs({
  type: "range",
  step: 5
})``;

const VolumeControls = ({ volume, setVolume }) => (
  <React.Fragment>
    <i className="fas fa-volume-up" />
    <RangeInput value={volume} onChange={e => setVolume(e.target.value)} />
  </React.Fragment>
);

export default VolumeControls;
