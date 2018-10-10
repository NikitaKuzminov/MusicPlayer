import React from "react";

import "./Tracks.css";
import Volume from "../../containers/Volume";

const Track = ({ track, currentTrackId, playingStatus, onClick }) => {
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
        {track.authorName} - {track.trackName}
      </p>
      {track.id === currentTrackId ? <Volume /> : null}
    </div>
  );
};

export default Track;
