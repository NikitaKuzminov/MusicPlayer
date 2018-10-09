import React from "react";
import { connect } from "react-redux";

import Timeline from "../components/Timeline/Timeline";

import { setTime } from "../actions/controls";
import { getCurrentTrack } from "../selectors";

class TimelineControl extends React.Component {
  // componentDidUpdate(prevProps) {
  //   if (this.props.currentTrack !== prevProps.currentTrack) {
  //     this.props(this.props.userID);
  //   }
  // }

  render() {
    let length;
    if (this.props.currentTrack !== undefined) {
      length = this.props.currentTrack.length;
    }
    const { setTime } = this.props;

    return (
      <div>
        <Timeline length={length} setTime={setTime} />
        <button onClick={() => setTime(29)}>Click me</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentTrack: getCurrentTrack(state)
});

const mapDispatchToProps = {
  setTime
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineControl);
