import React from "react";

import "./SearchTrack.css";

class SearchTrack extends React.Component {
  render() {
    const { onFetchTracklist } = this.props;
    return (
      <div className="search-field">
        <input
          type="text"
          placeholder="Enter track or artist here..."
          ref={input => (this._input = input)}
          onChange={() => onFetchTracklist(this._input.value)}
        />
      </div>
    );
  }
}

export default SearchTrack;
