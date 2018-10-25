import React from "react";

import styled from "styled-components";

import { lengthToMMSS } from "../functions";

const RangeInput = styled.input.attrs({
  type: "range",
  disabled: props => (props.playingStatus ? false : true)
})``;

class Timeline extends React.Component {
  render() {
    const { length, time, setTime, playingStatus } = this.props;
    return (
      <React.Fragment>
        {time !== undefined ? lengthToMMSS(time) : null}
        <RangeInput
          value={time}
          max={length}
          onChange={e => setTime(e.target.value)}
          playingStatus={playingStatus}
        />
      </React.Fragment>
    );
  }
}

export default Timeline;
