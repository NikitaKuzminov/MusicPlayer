import React from "react";
import { connect } from "react-redux";

import Timeline from "../components/Timeline/Timeline";

import {
  setTime,
  playTrack,
  timerStart,
  timerSetValue
} from "../actions/controls";

import { nextTrack, chooseTrack } from "../actions/currentTrack";

import { getAudio, getCurrentTrackId } from "../selectors";

import {
  getCurrentTrack,
  getTime,
  getPlayingStatus,
  getTimerValue
} from "../selectors";

class TimelineControl extends React.Component {
  componentDidMount() {
    const { audio, setTime } = this.props;

    //setInterval(() => setTime(this.props.audio.currentTime), 1000);
  }

  componentDidUpdate(prevProps) {}

  timelineClick = time => {
    const { setTime, timerSetValue, playingStatus, playTrack } = this.props;
    setTime(time);
    timerSetValue(parseInt(time));

    if (!playingStatus) {
      playTrack();
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
  timerValue: getTimerValue(state),
  currentTrackId: getCurrentTrackId(state)
});

const mapDispatchToProps = {
  setTime,
  playTrack,
  nextTrack,
  timerStart,
  timerSetValue,
  chooseTrack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineControl);
