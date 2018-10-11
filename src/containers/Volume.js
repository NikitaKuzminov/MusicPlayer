import React from "react";
import { connect } from "react-redux";
import { setVolume } from "../actions";
import { getVolume, getAudio } from "../selectors";
import VolumeControls from "../components/VolumeControls/VolumeControls";

class Volume extends React.Component {
  render() {
    const { volume, audio, setVolume } = this.props;
    return (
      <div>
        <VolumeControls volume={volume} setVolume={setVolume} audio={audio} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  volume: getVolume(state),
  audio: getAudio(state)
});

const mapDispatchToProps = { setVolume };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Volume);
