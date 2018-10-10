import React from "react";
import { connect } from "react-redux";

import { getPlayingStatus, getCurrentTrackId, getTracks } from "../selectors";
import { play, resetTime } from "../actions/controls";
import { nextTrack, previousTrack, chooseTrack } from "../actions/currentTrack";

import TrackControlsComponent from "../components/TrackControlsComponent/TrackControlsComponent";

class TrackControls extends React.Component {
  checkLast = () => {
    const { tracks, currentTrackId } = this.props;
    console.log(tracks.length);
    console.log(currentTrackId);
    if (currentTrackId >= tracks.length) {
      chooseTrack(1);
      console.log(tracks.length);
    }
  };

  checkStatus = () => {
    const { play, playingStatus, resetTime } = this.props;
    if (!playingStatus) {
      play();
    }
    resetTime();
  };

  nextClick = () => {
    const { nextTrack, chooseTrack, currentTrackId, tracks } = this.props;
    this.checkStatus();
    if (currentTrackId === tracks.length) {
      chooseTrack(1);
    } else {
      nextTrack();
    }
  };
  previousClick = () => {
    const { previousTrack, chooseTrack, currentTrackId, tracks } = this.props;
    this.checkStatus();
    if (currentTrackId === 1) {
      chooseTrack(tracks.length);
    } else {
      previousTrack();
    }
  };

  render() {
    const { playingStatus, play } = this.props;

    return (
      <div>
        <TrackControlsComponent
          playingStatus={playingStatus}
          playClick={play}
          nextClick={this.nextClick}
          previousClick={this.previousClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playingStatus: getPlayingStatus(state),
  currentTrackId: getCurrentTrackId(state),
  tracks: getTracks(state)
});

const mapDispatchToProps = {
  play,
  nextTrack,
  previousTrack,
  resetTime,
  chooseTrack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackControls);
