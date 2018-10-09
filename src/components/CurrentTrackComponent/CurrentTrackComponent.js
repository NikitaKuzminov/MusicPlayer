import React from "react";

const CurrentTrack = ({ currentTrack }) => {
  return (
    <div>
      {currentTrack !== undefined ? (
        <p>
          {currentTrack.authorName} - {currentTrack.trackName}
        </p>
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
};

export default CurrentTrack;
