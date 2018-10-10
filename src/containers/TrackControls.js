import React from "react";
import { connect } from "react-redux";

import { getPlayingStatus, getCurrentTrackId, getTracks } from "../selectors";
import { play } from "../actions/controls";
import { nextTrack, previousTrack, chooseTrack } from "../actions/currentTrack";

import TrackControlsComponent from "../components/TrackControlsComponent/TrackControlsComponent";

class TrackControls extends React.Component {
  checkStatus = () => {
    const { play, playingStatus } = this.props;
    if (!playingStatus) {
      play();
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
  chooseTrack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackControls);
