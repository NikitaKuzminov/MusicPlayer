import React from "react";

const CurrentTrack = ({ currentTrack }) => {
  return (
    <div>
      {currentTrack !== undefined ? (
        <div>
          {currentTrack.authorName} - {currentTrack.trackName}
        </div>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};

export default CurrentTrack;
