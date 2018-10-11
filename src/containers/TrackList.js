import React from "react";
import { connect } from "react-redux";
import { chooseTrack } from "../actions/currentTrack";
import { playTrack, setTime } from "../actions/controls";
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
    const { playingStatus, currentTrackId } = this.props;
    const audio = getAudio(currentTrackId);

    audio.play();
    if (!playingStatus) {
      const lol = getAudio(prevProps.currentTrackId);
      console.log("lol", lol);
      lol.pause();
    }

    if (
      prevProps.currentTrackId !== 0 &&
      prevProps.currentTrackId !== currentTrackId
    ) {
      const lol = getAudio(prevProps.currentTrackId);
      console.log("lol2", lol);
      lol.pause();
    }

    console.log(audio);
  }

  onClick = track => {
    const {
      chooseTrack,
      currentTrackId,
      playingStatus,
      playTrack,
      setTime,
      audio
    } = this.props;

    if (currentTrackId !== track.id) {
      chooseTrack(track.id);
      if (!playingStatus) {
        playTrack();
      }
      setTime(0);
    } else {
      playTrack();
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

const mapDispatchToProps = { chooseTrack, playTrack, setTime, setAudio };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);
