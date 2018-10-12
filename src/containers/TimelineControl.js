import React from "react";
import { connect } from "react-redux";

import Timeline from "../components/Timeline/Timeline";

import { setTime, playTrack } from "../actions/controls";
import { nextTrack, chooseTrack } from "../actions/currentTrack";
import { getAudio, getCurrentTrackId } from "../selectors";
import { getCurrentTrack, getTime, getPlayingStatus } from "../selectors";

class TimelineControl extends React.Component {
  componentDidUpdate(prevProps) {
    const { currentTrackId, time, setTime } = this.props;

    const audio = getAudio(currentTrackId);

    console.log(time);

    if (audio !== undefined) {
      setTime(audio.currentTime);
      console.log("test");
    }
  }

  timelineClick = time => {
    const { currentTrackId, playingStatus, playTrack } = this.props;

    const audio = getAudio(currentTrackId);
    audio.currentTime = time;

    if (!playingStatus) {
      playTrack();
    }
  };

  render() {
    const { time, currentTrackId } = this.props;
    const audio = getAudio(currentTrackId);
    let length;

    if (this.props.currentTrack !== undefined) {
      length = audio.duration;
    }

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
  currentTrackId: getCurrentTrackId(state),
  playingStatus: getPlayingStatus(state)
});

const mapDispatchToProps = {
  setTime,
  playTrack,
  nextTrack,
  chooseTrack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineControl);
