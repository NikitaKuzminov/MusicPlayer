import React from "react";
import { connect } from "react-redux";
import { chooseTrack, nextTrack } from "../actions/currentTrack";
import { playTrack, setTime } from "../actions/controls";
import {
  getPlayingStatus,
  getTracks,
  getCurrentTrackId,
  getVolume,
  getAudio
} from "../selectors";
import Track from "../components/Tracks/Tracks";

import { getTrackListOnSearch } from "../api/songs";

class TrackList extends React.Component {
  componentDidUpdate(prevProps) {
    const { playingStatus, currentTrackId } = this.props;
    const audio = getAudio(currentTrackId);

    audio.play();
    if (!playingStatus) {
      const lol = getAudio(prevProps.currentTrackId);
      lol.pause();
    }

    if (
      prevProps.currentTrackId !== 0 &&
      prevProps.currentTrackId !== currentTrackId
    ) {
      const lol = getAudio(prevProps.currentTrackId);
      lol.pause();
    }
  }

  onClick = track => {
    const {
      chooseTrack,
      currentTrackId,
      playingStatus,
      playTrack,
      setTime
    } = this.props;
    const audio = getAudio(currentTrackId);

    if (currentTrackId !== track.id) {
      chooseTrack(track.id);
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
    const {
      trackList,
      currentTrackId,
      playingStatus,
      volume,
      nextTrack
    } = this.props;
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
              onClick={() => this.onClick(track)}
              volume={volume}
              audio={audio}
              nextTrack={this.nextClick}
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

const mapDispatchToProps = { chooseTrack, playTrack, setTime, nextTrack };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);
