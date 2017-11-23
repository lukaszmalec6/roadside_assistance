import React, { Component } from "react";
import { PageHeader } from "react-bootstrap";
export default class TopBar extends Component {
  constructor() {
    super();
    this.state = {
      client: {}
    };
  }
  componentWillMount() {
    this.setState({ client: JSON.parse(localStorage.getItem("client")) });
  }
  render() {
    if (!this.state.client) {
      return <div />;
    } else {
      let { firstname, lastname } = this.state.client;
      return (
        <PageHeader style={styles.pageHeader}>
          Welcome back, <small>Logged as: {firstname + " " + lastname}</small>
        </PageHeader>
      );
    }
  }
}
const styles = {
  pageHeader: {
    paddingLeft: 20
  }
};
