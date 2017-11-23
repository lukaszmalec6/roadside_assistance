import { connect } from "react-redux";
import { fetchCars } from "../../Actions/actions";
import Cars from "./view";
const mapStateToProps = state => {
  return {
    cars: state.cars.cars
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCars: () => dispatch(fetchCars())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
