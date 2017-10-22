import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCars } from "../../Actions/actions";
class Cars extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    this.props.loadCars();
  }

  render() {
    return (
      <div>
        <h3>Welcome,dude</h3>
        <h2>Cars:</h2>
        {this.props.cars.map((car, index) => (
          <div key={index}>
            <p>
              {car.brand + " "}
              {car.type}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
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
