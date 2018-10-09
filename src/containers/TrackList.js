import React from "react";
import { connect } from "react-redux";
import { chooseTrack } from "../actions/currentTrack";
import { play } from "../actions/controls";
import { getPlayingStatus, getTracks, getCurrentTrackId } from "../selectors";
import Track from "../components/Tracks/Tracks";

class TrackList extends React.Component {
  onClick = track => {
    const { chooseTrack, currentTrackId, playingStatus, play } = this.props;
    if (currentTrackId !== track.id) {
      if (playingStatus) {
        chooseTrack(track.id);
        play();
      } else {
        chooseTrack(track.id);
      }
      play();
    } else {
      play();
    }
  };

  render() {
    const { trackList, currentTrackId, playingStatus } = this.props;
    return (
      <div>
        <ul>
          {trackList.map(track => (
            <Track
              key={track.track_name}
              track={track}
              currentTrackId={currentTrackId}
              playingStatus={playingStatus}
              onClick={() => this.onClick(track)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trackList: getTracks(state),
  currentTrackId: getCurrentTrackId(state),
  playingStatus: getPlayingStatus(state)
});

const mapDispatchToProps = { chooseTrack, play };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);
