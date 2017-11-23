import { connect } from "react-redux";
import { fetchIncidents } from "../../Actions/actions";
import Incidents from "./view";
const mapStateToProps = state => {
  return {
    incidents: state.incidents.incidents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadIncidents: () => dispatch(fetchIncidents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Incidents);
