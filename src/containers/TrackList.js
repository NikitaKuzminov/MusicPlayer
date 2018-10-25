import React from "react";
import { connect } from "react-redux";
import { chooseTrack, nextTrack } from "../actions/currentTrack";
import { playTrack, setTime } from "../actions/controls";
import {
  getPlayingStatus,
  getTracks,
  getCurrentTrackId,
  getAudio,
  getTime,
  getLoadingStatus
} from "../selectors";
import { Tracks as TracksComponent } from "../components/";

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
      audio.currentTime = 0;
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

  checkStatus = () => {
    const { playTrack, playingStatus } = this.props;
    if (!playingStatus) {
      playTrack();
    }
  };

  onClick = trackId => {
    const { chooseTrack, currentTrackId, playTrack } = this.props;

    if (currentTrackId !== trackId) {
      chooseTrack(trackId);
      this.checkStatus();
    } else {
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
    const { trackList, isLoading, currentTrackId, playingStatus } = this.props;
    return (
      <div>
        <ul style={{ padding: 0 }}>
          {trackList.length > 0 ? (
            trackList.map(track => (
              <TracksComponent
                key={track.id}
                track={track}
                currentTrackId={currentTrackId}
                playingStatus={playingStatus}
                onClick={() => this.onClick(track.id)}
                nextTrack={this.nextClick}
                compareTime={this.compareTime}
              />
            ))
          ) : isLoading ? (
            <h3>Loading</h3>
          ) : (
            <h3 style={{ textAlign: "center" }}>Playlist is empty</h3>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trackList: getTracks(state),
  isLoading: getLoadingStatus(state),
  currentTrackId: getCurrentTrackId(state),
  playingStatus: getPlayingStatus(state),
  time: getTime(state)
});

const mapDispatchToProps = { chooseTrack, playTrack, nextTrack, setTime };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);
