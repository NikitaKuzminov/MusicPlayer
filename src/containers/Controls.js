import React from "react";
import { connect } from "react-redux";

import { getPlayingStatus, getCurrentTrack } from "../selectors";
import { play } from "../actions/controls";
import { nextTrack, previousTrack } from "../actions/currentTrack";
import CurrentTrack from "../components/CurrentTrack/CurrentTrack";
import TrackControls from "../components/TrackControls/TrackControls";
import Volume from "./Volume";

class Controls extends React.Component {
  render() {
    const {
      playingStatus,
      currentTrack,
      play,
      nextTrack,
      previousTrack
    } = this.props;

    console.log(currentTrack);
    return (
      <div>
        <TrackControls
          playingStatus={playingStatus}
          playClick={play}
          nextClick={nextTrack}
          previousClick={previousTrack}
        />
        <CurrentTrack currentTrack={currentTrack} />
        <Volume volume />
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
)(Controls);
