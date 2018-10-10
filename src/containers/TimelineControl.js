import React from "react";
import { connect } from "react-redux";

import Timeline from "../components/Timeline/Timeline";

import { setTime, play, toggleTimer } from "../actions/controls";
import {
  getCurrentTrack,
  getTime,
  getPlayingStatus,
  getTimerStatus
} from "../selectors";

class TimelineControl extends React.Component {
  // componentDidUpdate() {
  //   const { time, toggleTimer } = this.props;
  //   const { playingStatus } = this.props;

  //   let timer = setInterval(() => setTime(parseInt(time) + 1), 1000);

  //   toggleTimer(timer);
  // }

  // startTimer = time => {
  //   const { setTime, toggleTimer } = this.props;
  //   toggleTimer(setInterval(() => setTime(parseInt(time) + 1), 1000));
  // };
  // stopTimer = () => {
  //   clearInterval();
  // };

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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  time: getTime(state),
  currentTrack: getCurrentTrack(state),
  playingStatus: getPlayingStatus(state),
  timerStatus: getTimerStatus(state)
});

const mapDispatchToProps = {
  setTime,
  play,
  toggleTimer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineControl);
