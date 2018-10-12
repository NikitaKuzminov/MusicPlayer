import React from "react";
import { connect } from "react-redux";

import Timeline from "../components/Timeline/Timeline";

import { playTrack } from "../actions/controls";
import { getAudio, getCurrentTrackId } from "../selectors";
import { getCurrentTrack, getTime, getPlayingStatus } from "../selectors";

class TimelineControl extends React.Component {
  timelineClick = time => {
    const { currentTrackId, playingStatus, playTrack } = this.props;

    const audio = getAudio(currentTrackId);
    audio.currentTime = time;
    audio.play();
    if (!playingStatus) {
      playTrack();
    }
  };

  render() {
    const { time, currentTrack } = this.props;
    let length;
    if (currentTrack !== undefined) {
      length = currentTrack.length;
    }

    return (
      <Timeline length={length} setTime={this.timelineClick} time={time} />
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
  playTrack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineControl);
