import React from "react";
import { connect } from "react-redux";
import { setVolume } from "../actions";
import { getVolume } from "../selectors";

class Volume extends React.Component {
  onClick = e => {
    this.props.setVolume(55);
  };

  render() {
    const { volume } = this.props;
    const setVolume = this.props.setVolume;
    return (
      <div>
        <p>{volume}</p>
        <input
          value={volume}
          type="range"
          step={5}
          onChange={e => setVolume(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  volume: getVolume(state)
});

const mapDispatchToProps = { setVolume };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Volume);
