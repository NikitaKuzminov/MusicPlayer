import React from "react";

const Track = ({ track, onClick }) => (
  <div>
    <p>
      <i className="fas fa-play" onClick={onClick} />
      {track.authorName} - {track.trackName} - {track.length}
    </p>
  </div>
);

export default Track;
