import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Panel,
  ButtonToolbar,
  Button,
  PageHeader,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import TiInfoOutline from "react-icons/lib/ti/info-outline";
import TiInputChecked from "react-icons/lib/ti/input-checked";
import TiWarning from "react-icons/lib/ti/warning";
import TiTrash from "react-icons/lib/ti/trash";
import api from "../../ApiService";

import "../../theme.css";
import FlipMove from "react-flip-move";
export default class Drivers extends Component {
  componentWillMount() {
    this.props.loadDrivers();
  }
  erase = id => {
    api.delete("drivers", id).then(response => {
      if (window.confirm(response)) {
        window.location.reload();
      }
    });
  };

  render() {
    return (
      <ListGroup>
        {this.props.drivers.map((driver, index) => (
          <ListGroupItem
            key={driver.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <h5 className="card-title">
                {driver.firstname + " "}
                {driver.lastname + " "}
              </h5>
            </div>
            <ButtonToolbar>
              <Button
                bsStyle="primary"
                bsSize="xsmall"
                href={"/drivers/" + driver.id}
              >
                <TiInfoOutline color="white" size={15} /> Info
              </Button>
              <Button
                bsStyle="danger"
                bsSize="xsmall"
                onClick={() => this.erase(driver.id)}
              >
                <TiTrash color="white" size={15} /> Delete
              </Button>
            </ButtonToolbar>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}
