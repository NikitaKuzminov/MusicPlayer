import React from "react";
import { connect } from "react-redux";
import { chooseTrack, nextTrack } from "../actions/currentTrack";
import { playTrack, setTime } from "../actions/controls";
import {
  getPlayingStatus,
  getTracks,
  getCurrentTrackId,
  getAudio,
  getTime
} from "../selectors";
import Track from "../components/Tracks/Tracks";

class TrackList extends React.Component {
  componentDidUpdate(prevProps) {
    const { currentTrackId, playingStatus } = this.props;
    const audio = getAudio(currentTrackId);

    if (audio !== undefined) {
      if (playingStatus) {
        audio.play();
      } else {
        audio.pause();
      }
    }
    const prevTrackId = prevProps.currentTrackId;
    if (prevTrackId !== currentTrackId && prevTrackId !== 0) {
      const audio = getAudio(prevTrackId);
      audio.pause();
    }
  }

  compareTime = () => {
    const { time, currentTrackId, playingStatus, setTime } = this.props;
    const audio = getAudio(currentTrackId);
    if (playingStatus) {
      if (Math.abs(audio.currentTime - time) > 1) {
        setTime(Math.round(audio.currentTime));
      }
    }
  };

  onClick = trackId => {
    const {
      chooseTrack,
      currentTrackId,
      playingStatus,
      playTrack
    } = this.props;
    const audio = getAudio(currentTrackId);

    if (currentTrackId !== trackId) {
      chooseTrack(trackId);
      if (!playingStatus) {
        playTrack();
      }
      if (audio !== undefined) {
        audio.currentTime = 0;
      }
    } else {
      playTrack();
    }
  };

  checkStatus = () => {
    const { playTrack, playingStatus } = this.props;
    if (!playingStatus) {
      playTrack();
    }
  };
  nextClick = () => {
    const { nextTrack, chooseTrack, currentTrackId, trackList } = this.props;
    this.checkStatus();
    if (currentTrackId === trackList.length) {
      chooseTrack(1);
    } else {
      nextTrack();
    }
  };

  render() {
    const { trackList, currentTrackId, playingStatus } = this.props;
    const audio = getAudio(currentTrackId);
    return (
      <div>
        <ul style={{ padding: 0 }}>
          {trackList.map(track => (
            <Track
              key={track.id}
              track={track}
              currentTrackId={currentTrackId}
              playingStatus={playingStatus}
              onClick={() => this.onClick(track.id)}
              audio={audio}
              nextTrack={this.nextClick}
              compareTime={this.compareTime}
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
  time: getTime(state)
});

const mapDispatchToProps = { chooseTrack, playTrack, nextTrack, setTime };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);
