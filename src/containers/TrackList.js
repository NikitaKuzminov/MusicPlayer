import React from "react";
import { connect } from "react-redux";
import { chooseTrack } from "../actions/currentTrack";
import { getTracks } from "../selectors";
import Track from "../components/Tracks/Tracks";

class TrackList extends React.Component {
  render() {
    const trackList = this.props.trackList;
    console.log(trackList);
    return (
      <div>
        <ul>
          {trackList.map(track => (
            <Track
              key={track.track_name}
              track={track}
              onClick={() => this.props.chooseTrack(track)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trackList: getTracks(state)
});

const mapDispatchToProps = { chooseTrack };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackList);
