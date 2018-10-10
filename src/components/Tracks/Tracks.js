import React from "react";

import "./Tracks.css";
import Volume from "../../containers/Volume";

const Track = ({ track, currentTrackId, playingStatus, onClick }) => {
  const current = track.id === currentTrackId ? "current" : "";
  return (
    <div className={`track ${current}`}>
      {track.id === currentTrackId ? (
        playingStatus ? (
          <i className="fas fa-pause" onClick={onClick} />
        ) : (
          <i className="fas fa-play" onClick={onClick} />
        )
      ) : (
        <i className="fas fa-play" onClick={onClick} />
      )}{" "}
      <p>
        {track.authorName} - {track.trackName}
      </p>
      {track.id === currentTrackId ? <Volume /> : null}
    </div>
  );
};

export default Track;
