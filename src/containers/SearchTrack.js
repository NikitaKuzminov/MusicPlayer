import React from "react";
import { connect } from "react-redux";

import { getPlayingStatus } from "../selectors";
import { playTrack } from "../actions/controls";
import { fetchTracklist } from "../actions/tracks";

import { SearchTrack as SearchTrackComponent } from "../components/";

class SearchTrackContainer extends React.Component {
  onFetchTracklist = input => {
    const { playingStatus, playTrack } = this.props;
    if (input !== undefined) {
      if (input.length > 2) {
        this.props.fetchTracklist(input);
        if (playingStatus) {
          playTrack();
        }
      }
    }
  };

  render() {
    return <SearchTrackComponent onFetchTracklist={this.onFetchTracklist} />;
  }
}

const mapStateToProps = state => ({
  playingStatus: getPlayingStatus(state)
});

const mapDispatchToProps = {
  fetchTracklist,
  playTrack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTrackContainer);
