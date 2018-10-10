import React from "react";
import { connect } from "react-redux";

import Timeline from "../components/Timeline/Timeline";

import { setTime, play } from "../actions/controls";
import { getCurrentTrack, getTime, getPlayingStatus } from "../selectors";

class TimelineControl extends React.Component {
  componentWillReceiveProps() {
    const { playingStatus } = this.props;
    if (playingStatus) {
      this.startTimer();
    } else {
    }
  }

  startTimer = () => {
    const { time, setTime } = this.props;
    setInterval(() => setTime(time + 1), 1000);
  };
  stopTimer = () => {
    clearInterval();
  };

  timelineClick = time => {
    const { setTime, playingStatus, play } = this.props;
    setTime(time);
    if (!playingStatus) {
      play();
    }
  };

  render() {
    let length;
    if (this.props.currentTrack !== undefined) {
      length = this.props.currentTrack.length;
    }
    const { time } = this.props;

    return (
      <div>
        <Timeline length={length} setTime={this.timelineClick} time={time} />
        <button onClick={this.startTimer}>Ckick me</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  time: getTime(state),
  currentTrack: getCurrentTrack(state),
  playingStatus: getPlayingStatus(state)
});

const mapDispatchToProps = {
  setTime,
  play
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineControl);
