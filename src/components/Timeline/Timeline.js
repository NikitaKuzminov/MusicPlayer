import React from "react";

import { lengthToMMSS } from "../../functions";

import "./Timeline.css";

class Timeline extends React.Component {
  render() {
    const { length, time, setTime } = this.props;
    return (
      <div>
        {time !== undefined ? lengthToMMSS(time) : null}
        <input
          value={time}
          type="range"
          max={length}
          onChange={e => setTime(e.target.value)}
        />
      </div>
    );
  }
}

export default Timeline;
