import { connect } from "react-redux";
import { fetchDrivers } from "../../Actions/actions";
import Drivers from "./view";
const mapStateToProps = state => {
  return {
    drivers: state.drivers.drivers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadDrivers: () => dispatch(fetchDrivers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drivers);
