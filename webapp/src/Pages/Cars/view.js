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
import "../../theme.css";
import FlipMove from "react-flip-move";
import TiInfoOutline from "react-icons/lib/ti/info-outline";
import TiInputChecked from "react-icons/lib/ti/input-checked";
import TiWarning from "react-icons/lib/ti/warning";
import TiTrash from "react-icons/lib/ti/trash";
import api from "../../ApiService";
export default class Cars extends Component {
  componentWillMount() {
    this.props.loadCars();
  }
  erase = id => {
    api.delete("cars", id).then(response => {
      if (window.confirm(response)) {
        window.location.reload();
      }
    });
  };

  render() {
    if (this.props.permissions) {
      return (
        <ListGroup>
          {this.props.cars.map((car, index) => (
            <ListGroupItem
              key={car.id}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <h5 className="card-title">{car.brand}</h5>
                <h5 className="card-text">Type: {car.type}</h5>
                <h5 className="card-text">
                  Owner: {car.ownerFirstname + " " + car.ownerLastname}
                </h5>
              </div>
              <ButtonToolbar>
                <Button
                  bsStyle="primary"
                  bsSize="xsmall"
                  href={"/cars/" + car.id}
                >
                  <TiInfoOutline color="white" size={15} /> Info
                </Button>
                <Button
                  bsStyle="danger"
                  bsSize="xsmall"
                  onClick={() => this.erase(car.id)}
                >
                  <TiTrash color="white" size={15} /> Delete
                </Button>
              </ButtonToolbar>
            </ListGroupItem>
          ))}
        </ListGroup>
      );
    } else
      return (
        <ListGroup>
          {this.props.cars.map(
            (car, index) =>
              this.props.clientid == car.ownerID ? (
                <ListGroupItem
                  key={car.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div>
                    <h5 className="card-title">{car.brand}</h5>
                    <h5 className="card-text">Type: {car.type}</h5>
                    <h5 className="card-text">
                      Owner: {car.ownerFirstname + " " + car.ownerLastname}
                    </h5>
                  </div>
                  <ButtonToolbar>
                    <Button
                      bsStyle="primary"
                      bsSize="xsmall"
                      href={"/cars/" + car.id}
                    >
                      <TiInfoOutline color="white" size={15} /> Info
                    </Button>
                    <Button
                      bsStyle="danger"
                      bsSize="xsmall"
                      onClick={() => this.erase(car.id)}
                    >
                      <TiTrash color="white" size={15} /> Delete
                    </Button>
                  </ButtonToolbar>
                </ListGroupItem>
              ) : null
          )}
        </ListGroup>
      );
  }
}
