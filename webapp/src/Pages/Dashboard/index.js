import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNewIncidents } from "../../Actions/actions";
import ApiService from "../../ApiService";
var api = new ApiService();
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: "no timestamp yet"
    };
    api.subscribeToTimer(() => this.props.loadLiveIncidents());
  }
  componentWillMount() {
    this.props.loadLiveIncidents();
  }
  render() {
    return (
      <div>
        <h3>Welcome,dude</h3>
        <h2>Dashboard</h2>

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
    fetched: state.live_incidents.fetched,
    incidents: state.live_incidents.live_incidents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadLiveIncidents: () => dispatch(fetchNewIncidents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
