import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDrivers } from "../../Actions/actions";
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    this.props.loadDrivers();
  }

  render() {
    return (
      <div>
        <h3>Welcome,dude</h3>
        <h2>Drivers:</h2>
        {this.props.drivers.map((driver, index) => (
          <div key={index}>
            <p>
              {driver.firstname + " "}
              {driver.secondname}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
