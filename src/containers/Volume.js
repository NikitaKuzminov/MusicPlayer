import React from "react";
import { connect } from "react-redux";
import { setVolume } from "../actions";
import { getVolume, getAudio, getCurrentTrackId } from "../selectors";
import VolumeControls from "../components/VolumeControls/VolumeControls";

class Volume extends React.Component {
  componentDidUpdate(prevProps) {
    const { currentTrackId, volume } = this.props;

    if (prevProps.volume !== volume) {
      const audio = getAudio(currentTrackId);
      audio.volume = volume / 100;
    }
  }

  getLink = () => {
    fetch(
      "http://api.napster.com/v2.2/artists/top?apikey=MDFmNzM0MDctMjU3ZC00MDIzLWFjOTAtMmEyMDNhNzkwYTRk"
    ).then(res => console.log(res));
  };

  render() {
    const { volume, audio, setVolume } = this.props;
    return (
      <div>
        <VolumeControls volume={volume} setVolume={setVolume} audio={audio} />
        <button onClick={this.getLink}>Lol</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  volume: getVolume(state),
  currentTrackId: getCurrentTrackId(state)
});

const mapDispatchToProps = { setVolume };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Volume);
