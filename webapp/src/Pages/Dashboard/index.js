import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNewIncidents } from "../../Actions/actions";
import ApiService from "../../ApiService";
import { Grid, Row, Col, Panel, ButtonToolbar, Button } from "react-bootstrap";
import "../../theme.css";
import FlipMove from "react-flip-move";
var api = new ApiService();
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    api.subscribeToTimer(() => this.props.loadLiveIncidents());
  }
  componentWillMount() {
    this.props.loadLiveIncidents();
  }
  erase = id => {
    api.deleteIncident(id).then(response => {
      if (window.confirm(response)) {
        window.location.reload();
      }
    });
  };
  markasprocessed = id => {
    console.log(id);
    api.markIncidentAsRead(id).then(response => {
      if (window.confirm(response)) {
        window.location.reload();
      }
    });
  };
  render() {
    return (
      <Grid>
        <Row className="show-grid" style={{ marginTop: "100px" }}>
          <h3>This page contains current information about the incidents</h3>
          <FlipMove duration={150} easing="ease">
            {this.props.incidents.map((incident, index) => (
              <Panel
                key={index}
                header={
                  incident.processed
                    ? "Accident, status: processed"
                    : "Accident, status: not processed!"
                }
                bsStyle={incident.processed ? "info" : "danger"}
              >
                <div className="card-body">
                  <h3 className="card-title">
                    {incident.firstname + " "}
                    {incident.secondname + " "}
                  </h3>
                  <h4 className="card-text">just had an accident!</h4>
                  <ButtonToolbar>
                    <Button
                      bsStyle="warning"
                      onClick={() => this.markasprocessed(incident.id)}
                    >
                      Got it!
                    </Button>
                    <Button
                      bsStyle="info"
                      onClick={() => this.erase(incident.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      bsStyle="success"
                      href={"/incidents/" + incident.id}
                    >
                      Viev info
                    </Button>
                  </ButtonToolbar>
                </div>
              </Panel>
            ))}
          </FlipMove>
        </Row>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return {
    incidents: state.live_incidents.live_incidents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadLiveIncidents: () => dispatch(fetchNewIncidents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
