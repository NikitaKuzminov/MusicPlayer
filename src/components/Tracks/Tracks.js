import React from "react";

import "./Tracks.css";
import Volume from "../../containers/Volume";

class Track extends React.Component {
  render() {
    const {
      track,
      currentTrackId,
      playingStatus,
      onClick,
      nextTrack,
      compareTime
    } = this.props;
    const current = track.id === currentTrackId ? "current" : "";

    return (
      <div className={`track ${current}`} onClick={onClick}>
        {track.id === currentTrackId ? (
          playingStatus ? (
            <i className="fas fa-pause" />
          ) : (
            <i className="fas fa-play" />
          )
        ) : (
          <i className="fas fa-play" />
        )}
        <p>
          <audio
            src={track.url}
            className="audio"
            onEnded={nextTrack}
            onTimeUpdate={compareTime}
          />
          {track.authorName} - {track.trackName}
        </p>
        {track.id === currentTrackId ? <Volume /> : null}
      </div>
    );
  }
}

export default Track;
