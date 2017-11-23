import React, { Component } from "react";
import { ButtonToolbar, Button, Jumbotron } from "react-bootstrap";
import api from "../../ApiService";
import TiArrowBackOutline from "react-icons/lib/ti/arrow-back-outline";
import Joi from "joi";
const escapeSpecialChars = /^[a-zA-Z0-9 ]+$/;
const userDataSchema = Joi.object().keys({
  firstname: Joi.string()
    .regex(escapeSpecialChars)
    .min(3)
    .max(20)
    .required(),
  lastname: Joi.string()
    .regex(escapeSpecialChars)
    .min(3)
    .max(20)
    .required(),
  login: Joi.string()
    .regex(escapeSpecialChars)
    .min(1)
    .max(20)
    .required()
});
export default class Driver extends Component {
  constructor() {
    super();
    this.state = {
      fireUpdate: false,
      firstname: "",
      lastname: "",
      login: "",
      validationError: false
    };
  }
  componentDidMount() {
    this.props.loadDriver(this.props.match.params.id);
  }
  update = () => {
    this.setState({ fireUpdate: !this.state.fireUpdate });
  };
  save = () => {
    Joi.validate(
      {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        login: this.state.login
      },
      userDataSchema,
      err => {
        if (err) {
          this.setState({ validationError: true });
        } else {
          let { lastname, firstname, login } = this.state;
          api
            .put("drivers", this.props.driver.id, {
              firstname,
              lastname,
              login
            })
            .then(response => {
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
    if (
      this.props.permissions ||
      this.props.clientid == this.props.match.params.id
    ) {
      return (
        <div>
          <Jumbotron>
            <ButtonToolbar>
              <Button bsSize="small" bsStyle="primary" href="/drivers">
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
            <h4>Firstname: {this.props.driver.firstname}</h4>
            <h4>Lastname: {this.props.driver.lastname}</h4>
            <h4>Login: {this.props.driver.login}</h4>
          </Jumbotron>
          {this.state.fireUpdate ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start"
                }}
              >
                <span>Firstname: </span>
                <input
                  onChange={event =>
                    this.setState({ firstname: event.target.value })
                  }
                  type="text"
                  placeholder={this.props.driver.firstname}
                />
                <span>Lastname: </span>
                <input
                  onChange={event =>
                    this.setState({ lastname: event.target.value })
                  }
                  type="text"
                  placeholder={this.props.driver.lastname}
                />
                <span>Login: </span>
                <input
                  onChange={event =>
                    this.setState({ login: event.target.value })
                  }
                  type="text"
                  placeholder={this.props.driver.login}
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
    } else {
      return (
        <div>
          <h1>No permissions to see this</h1>
        </div>
      );
    }
  }
}
