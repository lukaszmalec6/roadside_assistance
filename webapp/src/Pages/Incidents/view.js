import React, { Component } from "react";
import {
  ButtonToolbar,
  Button,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import api from "../../ApiService";

import "../../theme.css";
import TiTrash from "react-icons/lib/ti/trash";
import TiInfoOutline from "react-icons/lib/ti/info-outline";
import TiInputChecked from "react-icons/lib/ti/input-checked";

export default class Incidents extends Component {
  componentWillMount() {
    this.props.loadIncidents();
  }
  erase = id => {
    api.delete("incidents", id).then(response => {
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
      <div>
        <ListGroup>
          {this.props.incidents.map((incident, index) => (
            <ListGroupItem
              key={incident.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <h5 className="card-title">
                  {incident.driverFirstname + " "}
                  {incident.driversLastname + " "}
                </h5>
                <h5 className="card-text">Date: {incident.date}</h5>
              </div>
              <ButtonToolbar>
                <Button
                  disabled={incident.processed ? true : false}
                  bsStyle="primary"
                  bsSize="xsmall"
                  onClick={() => this.markasprocessed(incident.id)}
                >
                  <TiInputChecked color="white" size={15} />Mark as read
                </Button>
                <Button
                  bsStyle="primary"
                  bsSize="xsmall"
                  href={"/incidents/" + incident.id}
                >
                  <TiInfoOutline color="white" size={15} /> Info
                </Button>
                <Button
                  bsStyle="danger"
                  bsSize="xsmall"
                  onClick={() => this.erase(incident.id)}
                >
                  <TiTrash color="white" size={15} /> Delete
                </Button>
              </ButtonToolbar>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
