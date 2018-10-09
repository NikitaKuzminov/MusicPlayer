import React from "react";
import { connect } from "react-redux";

import { getCurrentTrack } from "../selectors";

class TimelineControl extends React.Component {
  render() {
    console.log(this.props.length);
    return (
      <div>
        <p>Lol Kek</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  length: getCurrentTrack(state)
});

export default connect(mapStateToProps)(TimelineControl);
