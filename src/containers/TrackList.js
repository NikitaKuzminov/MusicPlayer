import React from "react";
import { connect } from "react-redux";
import { chooseTrack } from "../actions/currentTrack";
import { play, setTime } from "../actions/controls";
import { setAudio } from "../actions/audio";
import {
  getPlayingStatus,
  getTracks,
  getCurrentTrackId,
  getVolume,
  getAudio
} from "../selectors";
import Track from "../components/Tracks/Tracks";

class TrackList extends React.Component {
  componentDidUpdate(prevProps) {
    const { currentTrackId, setAudio, audio } = this.props;
    if (prevProps.currentTrackId !== currentTrackId) {
      setAudio(document.getElementsByClassName("audio")[currentTrackId - 1]);
      console.log(audio);
    }
  }

  onClick = track => {
    const {
      chooseTrack,
      currentTrackId,
      playingStatus,
      play,
      setTime,
      audio
    } = this.props;

    if (currentTrackId !== track.id) {
      chooseTrack(track.id);
      if (!playingStatus) {
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
  volume: getVolume(state),
  audio: getAudio(state)
});

const mapDispatchToProps = { chooseTrack, play, setTime, setAudio };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);
