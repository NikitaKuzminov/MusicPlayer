import React from "react";
import { connect } from "react-redux";

import SearchTrack from "../components/SearchTrack/SearchTrack";

class SearchTrackContainer extends React.Component {
  render() {
    return <SearchTrack />;
  }
}

export default connect()(SearchTrackContainer);
