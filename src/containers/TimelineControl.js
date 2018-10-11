import React from "react";
import { connect } from "react-redux";

import Timeline from "../components/Timeline/Timeline";

import { setTime, play, timerStart, timerSetValue } from "../actions/controls";

import { nextTrack } from "../actions/currentTrack";

import {
  getCurrentTrack,
  getTime,
  getPlayingStatus,
  getTimerValue
} from "../selectors";

class TimelineControl extends React.Component {
  componentDidMount() {
    const { timerStart } = this.props;
    timerStart(0);
  }

  componentDidUpdate(prevProps) {
    const {
      time,
      timerValue,
      playingStatus,
      setTime,
      timerSetValue,
      currentTrack,
      nextTrack
    } = this.props;

    if (playingStatus) {
      if (prevProps.playingStatus === false) {
        timerSetValue(time);
      }
      if (prevProps.currentTrack === undefined) {
        timerSetValue(0);
      } else {
        // todo: fix crash when last track ends
        if (currentTrack.id !== prevProps.currentTrack.id) {
          timerSetValue(0);
        }
      }
      if (time !== timerValue) {
        setTime(timerValue);
      }
      if (timerValue > currentTrack.length) {
        nextTrack();
      }
    }
  }

  timelineClick = time => {
    const { setTime, timerSetValue, playingStatus, play } = this.props;
    setTime(time);
    timerSetValue(parseInt(time));

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
  timerValue: getTimerValue(state)
});

const mapDispatchToProps = {
  setTime,
  play,
  nextTrack,
  timerStart,
  timerSetValue
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineControl);
