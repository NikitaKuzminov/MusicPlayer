import React from "react";
import { connect } from "react-redux";
import { setVolume } from "../actions";
import { getVolume } from "../selectors";
import VolumeControls from "../components/VolumeControls/VolumeControls";

class Volume extends React.Component {
  onClick = e => {
    this.props.setVolume(55);
  };

  render() {
    const { volume } = this.props;
    const setVolume = this.props.setVolume;
    return (
      <div>
        <VolumeControls volume={volume} setVolume={setVolume} />
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
