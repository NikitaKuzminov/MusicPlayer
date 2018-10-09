import React from "react";

import "./Tracks.css";
import Volume from "../../containers/Volume";

const Track = ({ track, currentTrackId, playingStatus, onClick }) => {
  const current = track.id === currentTrackId ? "current" : "";
  return (
    <p className={current}>
      {track.id === currentTrackId ? (
        playingStatus ? (
          <i className="fas fa-pause" onClick={onClick} />
        ) : (
          <i className="fas fa-play" onClick={onClick} />
        )
      ) : (
        <i className="fas fa-play" onClick={onClick} />
      )}
      {track.authorName} - {track.trackName} - {track.length}
      {track.id === currentTrackId ? <Volume /> : null}
    </p>
  );
};

export default Track;
