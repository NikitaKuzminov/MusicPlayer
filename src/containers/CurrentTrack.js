import { connect } from "react-redux";

import { getCurrentTrack } from "../selectors";
import CurrentTrack from "../components/CurrentTrack";

const mapStateToProps = state => ({
  currentTrack: getCurrentTrack(state)
});

export default connect(mapStateToProps)(CurrentTrack);
