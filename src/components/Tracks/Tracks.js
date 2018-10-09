import React from "react";

import "./Tracks.css";
import Volume from "../../containers/Volume";

const Track = ({ track, currentTrackId, playingStatus, onClick }) => {
  const current = track.id === currentTrackId ? "current" : "";
  return (
    <div>
      {track.id === currentTrackId ? (
        playingStatus ? (
          <i className="fas fa-pause" onClick={onClick} />
        ) : (
          <i className="fas fa-play" onClick={onClick} />
        )
      ) : (
        <i className="fas fa-play" onClick={onClick} />
      )}{" "}
      <p className={current}>
        {track.authorName} - {track.trackName} - {track.length}
      </p>
      {track.id === currentTrackId ? <Volume /> : null}
    </div>
  );
};

export default Track;
