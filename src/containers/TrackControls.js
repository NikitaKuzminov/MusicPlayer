import React from "react";
import { connect } from "react-redux";

import {
  getPlayingStatus,
  getCurrentTrackId,
  getTracks,
  getVolume
} from "../selectors";
import { playTrack } from "../actions/controls";
import { setVolume } from "../actions/controls";
import { nextTrack, previousTrack, chooseTrack } from "../actions/currentTrack";

import TrackControlsComponent from "../components/TrackControlsComponent/TrackControlsComponent";

class TrackControls extends React.Component {
  checkStatus = () => {
    const { playTrack, playingStatus } = this.props;
    if (!playingStatus) {
      playTrack();
    }
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
    if (currentTrackId <= 1) {
      chooseTrack(tracks.length);
    } else {
      previousTrack();
    }
  };

  render() {
    const { playingStatus, play, volume } = this.props;

    return (
      <div>
        <TrackControlsComponent
          playingStatus={playingStatus}
          playClick={play}
          nextClick={this.nextClick}
          previousClick={this.previousClick}
          volume={volume}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playingStatus: getPlayingStatus(state),
  currentTrackId: getCurrentTrackId(state),
  tracks: getTracks(state),
  volume: getVolume(state)
});

const mapDispatchToProps = {
  playTrack,
  nextTrack,
  previousTrack,
  chooseTrack,
  setVolume
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackControls);
