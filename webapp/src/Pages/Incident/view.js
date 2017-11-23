import React, { Component } from "react";
import { ButtonToolbar, Button, Jumbotron } from "react-bootstrap";
import api from "../../ApiService";
import { Redirect } from "react-router";
import TiArrowBackOutline from "react-icons/lib/ti/arrow-back-outline";

export default class Incident extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }
  erase = id => {
    api.deleteIncident(id).then(response => {
      if (window.confirm(response)) {
        console.log(this.state);
        return <Redirect to="/dashboard" />;
      } else {
        console.log("hh");
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
  componentDidMount() {
    this.props.loadIncident(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <ButtonToolbar>
            <Button bsSize="small" bsStyle="primary" href="/incidents">
              <TiArrowBackOutline color="white" />
            </Button>
            <Button
              disabled={this.props.incident.processed}
              bsSize="small"
              bsStyle="primary"
              onClick={() => this.markasprocessed(this.props.incident.id)}
            >
              Mark as read
            </Button>
          </ButtonToolbar>
          <h3>
            <h4>Driver:</h4>
            {this.props.incident.firstname + " "}
            {this.props.incident.lastname}
          </h3>
          <h3>
            <h4>Vehicle:</h4>
            {this.props.incident.brand + " "}
            {this.props.incident.type}
          </h3>
          <h3>
            <h4>Date:</h4>
            {this.props.incident.date}
          </h3>
          <h3>
            <h4>Directions:</h4>
            latitude: {this.props.incident.latitude}
          </h3>
          <h3>longitude: {this.props.incident.longitude}</h3>
          <h3>
            <h4>Alert Status:</h4>
            {this.props.incident.processed ? " Processed" : " Not Processed"}
          </h3>
        </Jumbotron>
      </div>
    );
  }
}
