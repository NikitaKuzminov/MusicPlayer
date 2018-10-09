import React from "react";
import { connect } from "react-redux";

import { getPlayingStatus, getCurrentTrack } from "../selectors";
import { play } from "../actions/controls";
import CurrentTrack from "../components/CurrentTrack/CurrentTrack";
import TrackControls from "../components/TrackControls/TrackControls";
import Volume from "./Volume";

class Controls extends React.Component {
  render() {
    const { playingStatus, currentTrack, play } = this.props;

    console.log(currentTrack);
    return (
      <div>
        <TrackControls playingStatus={playingStatus} playClick={play} />
        <CurrentTrack currentTrack={currentTrack} />
        <Volume />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playingStatus: getPlayingStatus(state),
  currentTrack: getCurrentTrack(state)
});

const mapDispatchToProps = {
  play
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
