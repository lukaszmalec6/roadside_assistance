import React, { Component } from "react";
import "../../../Layout/styles.css";
export default class Login extends Component {
  login = () => {
    console.log("login");
  };
  render() {
    return (
      <div className="login">
        <div>
          <span>Login</span>
          <input type="text" />
          <span>Password</span>
          <input type="text" />
        </div>
        <button onClick={() => this.login()}>Go</button>
      </div>
    );
  }
}
