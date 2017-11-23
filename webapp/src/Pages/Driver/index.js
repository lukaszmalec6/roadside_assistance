import { connect } from "react-redux";
import { fetchDriver } from "../../Actions/actions";
import Driver from "./view";
const mapStateToProps = state => {
  return {
    driver: state.driver.driver
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadDriver: id => dispatch(fetchDriver(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Driver);
