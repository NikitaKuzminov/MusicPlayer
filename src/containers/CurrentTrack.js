import React from "react";
import { connect } from "react-redux";

import { getPlayingStatus, getCurrentTrack } from "../selectors";
import { playTrack } from "../actions/controls";
import CurrentTrackComponent from "../components/CurrentTrackComponent/CurrentTrackComponent";

class CurrentTrack extends React.Component {
  render() {
    const { currentTrack } = this.props;
    return (
      <div>
        <CurrentTrackComponent currentTrack={currentTrack} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playingStatus: getPlayingStatus(state),
  currentTrack: getCurrentTrack(state)
});

const mapDispatchToProps = {
  playTrack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTrack);
