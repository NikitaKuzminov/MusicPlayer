import React from "react";

import "./Tracks.css";
import Volume from "../../containers/Volume";

class Track extends React.Component {
  play = track => {
    const { playingStatus, currentTrackId, onClick } = this.props;
    onClick();
    if (track !== undefined) {
      playingStatus ? track.play() : track.pause();
    }
    console.log(playingStatus, currentTrackId);
    console.log(track);
  };

  setVolume = audio => {
    const { volume } = this.props;

    console.log(volume / 100);

    if (audio !== undefined) {
      audio.volume = volume / 100;
      console.log(audio.volume);
    }
  };

  render() {
    const { track, currentTrackId, playingStatus, onClick } = this.props;
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
            controls
            onEnded={() => console.log("lol")}
          />
          ;{track.authorName} - {track.trackName}
        </p>
        {track.id === currentTrackId ? <Volume /> : null}
      </div>
    );
  }
}

export default Track;
