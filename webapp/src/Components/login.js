import React, { Component } from "react";
import { Redirect } from "react-router";
import "../Layout/styles.css";
import api from "../ApiService";
import Joi from "joi";
const escapeSpecialChars = /^[a-zA-Z0-9 ]+$/;
const userDataSchema = Joi.object().keys({
  login: Joi.string()
    .regex(escapeSpecialChars)
    .min(1)
    .max(20)
    .required(),
  password: Joi.string()
    .regex(escapeSpecialChars)
    .min(1)
    .max(20)
    .required()
});
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: "",
      password: "",
      validationError: false,
      loginError: false,
      fireRedirect: false
    };
  }

  login = () => {
    Joi.validate(
      {
        login: this.state.login,
        password: this.state.password
      },
      userDataSchema,
      err => {
        if (err) {
          this.setState({ loginError: false, validationError: true });
        } else {
          let { login, password } = this.state;
          api.login({ login, password }).then(response => {
            if (response === "Invalid data") {
              this.setState({ validationError: false, loginError: true });
            } else {
              localStorage.setItem("client", JSON.stringify(response));
              this.setState({
                validationError: false,
                loginError: false,
                fireRedirect: true
              });
            }
          });
        }
      }
    );
  };
  render() {
    return (
      <div className="login-box">
        <div className="login">
          <div>
            <span>Login</span>
            <input
              onChange={event => this.setState({ login: event.target.value })}
              type="text"
              placeholder="login"
            />
            <span>Password</span>
            <input
              onChange={event =>
                this.setState({ password: event.target.value })}
              type="text"
              placeholder="password"
            />
          </div>
          <button onClick={() => this.login()}>Go</button>
        </div>
        <div className="error">
          {this.state.validationError ? (
            <p>Invalid login or passowrd. Please avoid special characters.</p>
          ) : this.state.loginError ? (
            <p>Login or password doesn't match</p>
          ) : null}
          {this.state.fireRedirect && <Redirect to="/dashboard" />}
        </div>
      </div>
    );
  }
}
