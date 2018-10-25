import React from "react";
import { connect } from "react-redux";

import { getPlayingStatus, getCurrentTrackId, getTracks } from "../selectors";
import { playTrack } from "../actions/controls";
import { nextTrack, previousTrack, chooseTrack } from "../actions/currentTrack";

import { TrackControls as TrackControlsComponent } from "../components";

class TrackControlsContainer extends React.Component {
  playClick = () => {
    const { currentTrackId, playTrack } = this.props;
    if (currentTrackId !== 0) {
      playTrack();
    } else {
      this.nextClick();
    }
  };

  checkStatus = () => {
    const { playTrack, playingStatus } = this.props;
    if (!playingStatus) {
      playTrack();
    }
  };

  previousClick = () => {
    const { previousTrack, chooseTrack, currentTrackId, tracks } = this.props;
    if (currentTrackId <= 1) {
      chooseTrack(tracks.length);
    } else {
      previousTrack();
    }
    this.checkStatus();
  };

  nextClick = () => {
    const { nextTrack, chooseTrack, currentTrackId, tracks } = this.props;
    if (currentTrackId === tracks.length) {
      chooseTrack(1);
    } else {
      nextTrack();
    }
    this.checkStatus();
  };

  render() {
    const { playingStatus, playTrack } = this.props;

    return (
      <div>
        <TrackControlsComponent
          playingStatus={playingStatus}
          playClick={playTrack}
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
  playTrack,
  nextTrack,
  previousTrack,
  chooseTrack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackControlsContainer);
