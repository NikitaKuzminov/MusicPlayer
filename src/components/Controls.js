import React from "react";
import styled from "styled-components";

import TrackControls from "../containers/TrackControls";
import Volume from "../containers/Volume";
import CurrentTrack from "../containers/CurrentTrack";
import TimelineControl from "../containers/TimelineControl";

const ControlsComponent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Controls = () => (
  <ControlsComponent>
    <TrackControls />
    <CurrentTrack />
    <TimelineControl />
    <Volume />
  </ControlsComponent>
);

export default Controls;
