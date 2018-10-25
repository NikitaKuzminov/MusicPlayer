import React from "react";
import { connect } from "react-redux";

import { Timeline as TimelineComponent } from "../components/";

import { playTrack } from "../actions/controls";
import { getAudio } from "../selectors";
import { getCurrentTrack, getTime, getPlayingStatus } from "../selectors";

class TimelineControl extends React.Component {
  timelineClick = time => {
    const { currentTrack, playingStatus, playTrack } = this.props;

    const audio = getAudio(currentTrack.id);
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
      <TimelineComponent
        length={length}
        setTime={this.timelineClick}
        time={time}
      />
    );
  }
}

const mapStateToProps = state => ({
  time: getTime(state),
  currentTrack: getCurrentTrack(state),
  playingStatus: getPlayingStatus(state)
});

const mapDispatchToProps = {
  playTrack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineControl);
