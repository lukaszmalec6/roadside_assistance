import { connect } from "react-redux";
import { fetchIncident } from "../../Actions/actions";
import Incident from "./view";
const mapStateToProps = state => {
  return {
    incident: state.incident.incident
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadIncident: id => dispatch(fetchIncident(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Incident);
