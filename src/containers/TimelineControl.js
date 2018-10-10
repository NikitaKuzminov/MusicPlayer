import React from "react";
import { connect } from "react-redux";

import Timeline from "../components/Timeline/Timeline";

import { setTime, setTimer, play } from "../actions/controls";
import { nextTrack } from "../actions/currentTrack";
import {
  getCurrentTrack,
  getTime,
  getPlayingStatus,
  getTimerValue
} from "../selectors";

class TimelineControl extends React.Component {
  state = {
    timer: null,
    counter: this.props.time
  };

  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }
  startTimer() {
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  tick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  componentDidUpdate(prevProps) {
    const {
      time,
      setTime,
      playingStatus,
      currentTrack,
      nextTrack
    } = this.props;
    const counter = this.state.counter;

    console.log(counter);

    if (playingStatus) {
      if (prevProps.currentTrack !== undefined) {
        if (prevProps.currentTrack.id !== currentTrack.id) {
          this.setState({ counter: 0 });
        }
      }
      if (counter !== this.props.time || prevProps.time === 0) {
        setTime(counter);
      }
    } else {
      //clearInterval(this.state.timer);
    }

    // if (playingStatus) {
    //   if (prevProps.time !== counter) {
    //     this.setState({ counter: time });
    //     console.log(time, counter);
    //     if (prevProps.time !== this.props.time) {
    //       this.startTimer();
    //     }
    //     this.setState({ counter: 1 });
    //   } else {
    //     if (prevProps.time === time || prevProps.time === 0) {
    //       // this.startTimer();
    //     }
    //   }
    //   // if (this.props.time !== counter) {
    //   //   setTime(counter);
    //   // }
    // }

    // if (!playingStatus) {
    //   clearInterval(this.state.timer);
    // }

    // if (currentTrack !== undefined) {
    //   if (prevProps.currentTrack) {
    //     if (currentTrack.id !== prevProps.currentTrack.id) {
    //       this.stopTimer();
    //       this.setState({ counter: 0 });
    //     }
    //   }
    //   if (this.state.counter > currentTrack.length) {
    //     nextTrack();
    //     this.setState({ counter: 0 });
    //   }
    // }
  }

  timelineClick = time => {
    const { setTime, playingStatus, play } = this.props;

    setTime(time);
    this.setState({ counter: parseInt(time) });

    if (!playingStatus) {
      play();
    }
  };

  stopTimer = () => clearInterval(this.state.timer);

  render() {
    let length;
    if (this.props.currentTrack !== undefined) {
      length = this.props.currentTrack.length;
    }
    const { time } = this.props;

    return (
      <div>
        <Timeline length={length} setTime={this.timelineClick} time={time} />
        <button onClick={() => clearInterval(this.state.timer)}>Lol</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  time: getTime(state),
  currentTrack: getCurrentTrack(state),
  playingStatus: getPlayingStatus(state),
  timerValue: getTimerValue(state)
});

const mapDispatchToProps = {
  setTime,
  play,
  setTimer,
  nextTrack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineControl);
