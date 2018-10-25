import React from "react";
import styled from "styled-components";

import Volume from "../containers/Volume";

const Track = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ccc;
  padding-left: 20px;
  flex-direction: row;

  background-color: ${props =>
    props.current ? "rgb(247, 243, 243)" : "transparent"};
`;

const Child = styled.div`
  margin-right: 10px;
`;

const TrackContainer = styled.div`
  display: flex;
  align-items: center;
`;

class Tracks extends React.Component {
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
      <Track current={current}>
        <TrackContainer onClick={onClick}>
          <Child>
            {current ? (
              playingStatus ? (
                <i className="fas fa-pause" />
              ) : (
                <i className="fas fa-play" />
              )
            ) : (
              <i className="fas fa-play" />
            )}
          </Child>
          <Child>
            <p>
              <audio
                src={track.url}
                className="audio"
                onEnded={nextTrack}
                onTimeUpdate={compareTime}
              />
              {track.authorName} - {track.trackName}
            </p>
          </Child>
        </TrackContainer>
        {track.id === currentTrackId ? <Volume /> : null}
      </Track>
    );
  }
}

export default Tracks;
