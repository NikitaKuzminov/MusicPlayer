import React from "react";
import { connect } from "react-redux";

import { getPlayingStatus } from "../selectors";
import { playTrack } from "../actions/controls";
import { fetchTracklist } from "../actions/tracks";

import SearchTrack from "../components/SearchTrack/SearchTrack";

class SearchTrackContainer extends React.Component {
  onFetchTracklist = input => {
    const { playingStatus, fetchTracklist, playTrack } = this.props;

    console.log(input);

    if (input !== undefined) {
      if (input.length > 2) {
        fetchTracklist(input);
        // if (playingStatus) {
        //   playTrack();
        // }
      }
    }
  };

  render() {
    return <SearchTrack onFetchTracklist={this.onFetchTracklist} />;
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
