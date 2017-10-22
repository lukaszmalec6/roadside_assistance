import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchIncidents } from "../../Actions/actions";
import {
  Grid,
  Row,
  Col,
  Panel,
  ButtonToolbar,
  Button,
  PageHeader
} from "react-bootstrap";
import FlipMove from "react-flip-move";
import ApiService from "../../ApiService";
import { Link } from "react-router";
import "../../theme.css";
import TiTrash from "react-icons/lib/ti/trash";
import TiInfoOutline from "react-icons/lib/ti/info-outline";
import TiInputChecked from "react-icons/lib/ti/input-checked";

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
          <PageHeader>
            <h3>Incident's archieve</h3>
          </PageHeader>
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
                  <h2 className="card-title">
                    {incident.firstname + " "}
                    {incident.secondname + " "}
                  </h2>
                  <h3 className="card-text">Had an accident</h3>
                  <ButtonToolbar style={{ marginTop: "20px" }}>
                    <Button
                      disabled={incident.processed}
                      bsStyle="warning"
                      bsSize="large"
                      onClick={() => this.markasprocessed(incident.id)}
                    >
                      <TiInputChecked color="white" size={30} />Got it!
                    </Button>
                    <Button
                      bsStyle="info"
                      bsSize="large"
                      onClick={() => this.erase(incident.id)}
                    >
                      <TiTrash color="white" size={30} /> Delete
                    </Button>
                    <Button
                      bsStyle="success"
                      bsSize="large"
                      href={"/incidents/" + incident.id}
                    >
                      <TiInfoOutline color="white" size={30} /> Viev info
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
