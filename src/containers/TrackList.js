import React from "react";
import { connect } from "react-redux";
import { chooseTrack } from "../actions/currentTrack";
import { play, setTime } from "../actions/controls";
import {
  getPlayingStatus,
  getTracks,
  getCurrentTrackId,
  getVolume
} from "../selectors";
import Track from "../components/Tracks/Tracks";

class TrackList extends React.Component {
  onClick = track => {
    const {
      chooseTrack,
      currentTrackId,
      playingStatus,
      play,
      setTime
    } = this.props;

    if (currentTrackId !== track.id) {
      if (playingStatus) {
        chooseTrack(track.id);
      } else {
        chooseTrack(track.id);
        play();
      }
      setTime(0);
    } else {
      play();
    }
  };

  render() {
    const { trackList, currentTrackId, playingStatus, volume } = this.props;
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
              volume={volume}
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
  playingStatus: getPlayingStatus(state),
  volume: getVolume(state)
});

const mapDispatchToProps = { chooseTrack, play, setTime };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);
