import { connect } from "react-redux";
import { fetchCar } from "../../Actions/actions";
import Car from "./view";
const mapStateToProps = state => {
  return {
    car: state.car.car
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCar: id => dispatch(fetchCar(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Car);
