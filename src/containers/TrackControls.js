import React from "react";
import { connect } from "react-redux";

import { getPlayingStatus, getCurrentTrack } from "../selectors";
import { play } from "../actions/controls";
import { nextTrack, previousTrack } from "../actions/currentTrack";

import TrackControlsComponent from "../components/TrackControlsComponent/TrackControlsComponent";

class TrackControls extends React.Component {
  render() {
    const { playingStatus, play, nextTrack, previousTrack } = this.props;

    return (
      <div>
        <TrackControlsComponent
          playingStatus={playingStatus}
          playClick={play}
          nextClick={nextTrack}
          previousClick={previousTrack}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playingStatus: getPlayingStatus(state),
  currentTrack: getCurrentTrack(state)
});

const mapDispatchToProps = {
  play,
  nextTrack,
  previousTrack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackControls);
