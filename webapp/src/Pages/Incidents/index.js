import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchIncidents } from "../../Actions/actions";
import { Grid, Row, Col, Panel, ButtonToolbar, Button } from "react-bootstrap";
import FlipMove from "react-flip-move";
import ApiService from "../../ApiService";
import { Link } from "react-router";
import "../../theme.css";
var api = new ApiService();
class Incidents extends Component {
  componentWillMount() {
    this.props.loadIncidents();
  }
  erase = id => {
    api.deleteIncident(id).then(response => {
      if (window.confirm(response)) {
        window.location.reload();
      }
    });
  };
  markasprocessed = id => {
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
          <h3>Incident's archieve</h3>
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
                  <h4 className="card-text">Had an accident</h4>
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
    incidents: state.incidents.incidents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadIncidents: () => dispatch(fetchIncidents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Incidents);
