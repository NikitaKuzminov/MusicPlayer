import React from "react";

import { lengthToMMSS } from "../../functions";

class Timeline extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.length !== prevProps.length) {
      console.log(this.props.length);
    }
  }

  render() {
    const { length, setTime } = this.props;
    console.log(length);
    return (
      <div>
        {length !== undefined ? lengthToMMSS(length) : null}
        <p>{length}</p>
        <input
          type="range"
          max={length}
          onChange={() => setTime(this._time.value)}
          ref={time => (this._time = time)}
        />
      </div>
    );
  }
}

export default Timeline;
