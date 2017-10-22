import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchIncidents } from "../../Actions/actions";
class Incidents extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    this.props.loadIncidents();
  }

  render() {
    return (
      <div>
        <h3>Welcome,dude</h3>
        <h2>Incidents:</h2>
        {this.props.incidents.map((incident, index) => (
          <div key={index}>
            <p>
              {incident.firstname + " "}
              {incident.secondname + " "}
              {incident.date + " "}
              {incident.brand + " "}
              {incident.type}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
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
