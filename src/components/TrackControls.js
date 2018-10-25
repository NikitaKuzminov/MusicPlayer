import React from "react";

import styled from "styled-components";

const ControlsButtonContainer = styled.span`
  margin-right: 5px;

  :hover {
    color: blueviolet;
  }
`;

const Controls = ({ playingStatus, playClick, nextClick, previousClick }) => {
  const playButton = playingStatus ? "fas fa-pause" : "fas fa-play";

  return (
    <div className="controls">
      <ControlsButtonContainer>
        <i className={playButton} onClick={playClick} />
      </ControlsButtonContainer>
      <ControlsButtonContainer>
        <i className="fas fa-backward" onClick={previousClick} />
      </ControlsButtonContainer>
      <ControlsButtonContainer>
        <i className="fas fa-forward" onClick={nextClick} />
      </ControlsButtonContainer>
    </div>
  );
};

export default Controls;
