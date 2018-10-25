import { connect } from "react-redux";

import { getCurrentTrack } from "../selectors";
import { CurrentTrack as CurrentTrackComponent } from "../components";

const mapStateToProps = state => ({
  currentTrack: getCurrentTrack(state)
});

export default connect(mapStateToProps)(CurrentTrackComponent);
