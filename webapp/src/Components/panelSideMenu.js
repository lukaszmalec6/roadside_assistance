import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
export default class PanelSideMenu extends Component {
  constructor() {
    super();
    this.state = {
      activeKey: ""
    };
  }

  render() {
    return (
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
      </Nav>
    );
  }
}
