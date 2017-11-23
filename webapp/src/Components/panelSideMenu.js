import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Redirect } from "react-router";
export default class PanelSideMenu extends Component {
  constructor() {
    super();
    this.state = {
      activeKey: "",
      fireRedirect: false,
      client: {}
    };
  }
  componentWillMount() {
    this.setState({ client: JSON.parse(localStorage.getItem("client")) });
  }
  logout = () => {
    localStorage.removeItem("client");
    this.setState({ fireRedirect: true });
  };

  render() {
    if (!this.state.client) {
      return <div />;
    } else {
      if (this.state.client.role === "administrator") {
        let { client } = this.state;
        return (
          <nav>
            <Nav bsStyle="pills" activeHref={this.props.path} stacked>
              <NavItem eventKey={1} href="/dashboard">
                Dashboard
              </NavItem>
              <NavItem eventKey={2} href="/incidents">
                Incidents
              </NavItem>
              <NavItem eventKey={3} href="/drivers">
                Drivers
              </NavItem>
              <NavItem eventKey={4} href="/cars">
                Cars
              </NavItem>
              <NavItem eventKey={4} onClick={() => this.logout()}>
                Logout
              </NavItem>
            </Nav>
            {this.state.fireRedirect && <Redirect to="/" />}
          </nav>
        );
      } else if (this.state.client.role === "driver") {
        let { client } = this.state;
        return (
          <nav>
            <Nav bsStyle="pills" activeHref={this.props.path} stacked>
              <NavItem eventKey={1} href="/dashboard">
                Dashboard
              </NavItem>
              <NavItem eventKey={1} href={"/drivers/" + client.id}>
                Your profile
              </NavItem>
              <NavItem eventKey={4} href="/cars">
                Your vehicles
              </NavItem>
              <NavItem eventKey={4} onClick={() => this.logout()}>
                Logout
              </NavItem>
            </Nav>
            {this.state.fireRedirect && <Redirect to="/" />}
          </nav>
        );
      }
    }
  }
}
