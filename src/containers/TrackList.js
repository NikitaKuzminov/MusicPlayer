import React from "react";
import { connect } from "react-redux";
import { chooseTrack } from "../actions/currentTrack";
import { play, resetTime } from "../actions/controls";
import { getPlayingStatus, getTracks, getCurrentTrackId } from "../selectors";
import Track from "../components/Tracks/Tracks";

class TrackList extends React.Component {
  onClick = track => {
    const {
      chooseTrack,
      currentTrackId,
      playingStatus,
      play,
      resetTime
    } = this.props;

    if (currentTrackId !== track.id) {
      if (playingStatus) {
        chooseTrack(track.id);
      } else {
        chooseTrack(track.id);
        play();
      }
      resetTime();
    } else {
      play();
    }
  };

  render() {
    const { trackList, currentTrackId, playingStatus } = this.props;
    return (
      <div>
        <ul style={{ padding: 0 }}>
          {trackList.map(track => (
            <Track
              key={track.id}
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

const mapDispatchToProps = { chooseTrack, play, resetTime };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);
