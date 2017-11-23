import { connect } from "react-redux";
import { fetchNewIncidents } from "../../Actions/actions";
import Dashboard from "./view";
const mapStateToProps = state => {
  return {
    incidents: state.live_incidents.live_incidents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadLiveIncidents: () => dispatch(fetchNewIncidents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
