import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Panel,
  ButtonToolbar,
  Button,
  PageHeader,
  Jumbotron
} from "react-bootstrap";
import api from "../../ApiService";
import { Redirect } from "react-router";
import TiArrowBackOutline from "react-icons/lib/ti/arrow-back-outline";
import Joi from "joi";
const escapeSpecialChars = /^[a-zA-Z0-9 ]+$/;
const carDataSchema = Joi.object().keys({
  brand: Joi.string()
    .regex(escapeSpecialChars)
    .min(3)
    .max(20)
    .required(),
  type: Joi.string()
    .regex(escapeSpecialChars)
    .min(3)
    .max(20)
    .required()
});
export default class Car extends Component {
  constructor() {
    super();
    this.state = {
      fireUpdate: false,
      brand: "",
      type: "",
      validationError: false
    };
  }
  componentDidMount() {
    this.props.loadCar(this.props.match.params.id);
  }
  update = () => {
    this.setState({ fireUpdate: !this.state.fireUpdate });
  };
  save = () => {
    Joi.validate(
      {
        brand: this.state.brand,
        type: this.state.type
      },
      carDataSchema,
      err => {
        if (err) {
          this.setState({ validationError: true });
        } else {
          let { brand, type } = this.state;
          api.put("cars", this.props.car.id, { brand, type }).then(response => {
            alert(response);
            this.setState({
              validationError: false
            });
          });
        }
      }
    );
  };
  render() {
    return (
      <div>
        <Jumbotron>
          <ButtonToolbar>
            <Button bsSize="small" bsStyle="primary" href="/cars">
              <TiArrowBackOutline color="white" />
            </Button>
            <Button
              bsSize="small"
              bsStyle="primary"
              onClick={() => this.update()}
            >
              Update
            </Button>
          </ButtonToolbar>
          <h4>Brand: {this.props.car.brand}</h4>
          <h4>Type: {this.props.car.type}</h4>
          <h4>
            Owner:{" "}
            {this.props.car.ownerFirstname + " " + this.props.car.ownerLastname}
          </h4>
        </Jumbotron>
        {this.state.fireUpdate ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div>
              <span>Brand: </span>
              <input
                onChange={event => this.setState({ brand: event.target.value })}
                type="text"
                placeholder={this.props.car.brand}
              />
              <span>Type: </span>
              <input
                onChange={event => this.setState({ type: event.target.value })}
                type="text"
                placeholder={this.props.car.type}
              />
              {this.state.validationError ? (
                <p
                  style={{
                    marginTop: "10px",
                    color: "red",
                    fontSize: "11px",
                    textAlign: "center"
                  }}
                >
                  Invalid data
                </p>
              ) : null}
            </div>
            <div style={{ margin: "10px" }}>
              <Button
                bsSize="small"
                bsStyle="primary"
                onClick={() => this.save()}
              >
                Save
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
