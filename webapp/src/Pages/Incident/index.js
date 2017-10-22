import React, { Component } from "react";
import { connect } from "react-redux";
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
import { fetchIncident } from "../../Actions/actions";
class Incident extends Component {
  componentDidMount() {
    this.props.loadIncident(this.props.params.id);
  }
  render() {
    return (
      <Grid>
        <Row className="show-grid" style={{ marginTop: "100px" }}>
          <PageHeader>Incident's details</PageHeader>
          <Jumbotron>
            <h3>
              <h4>Driver:</h4>
              {" " + this.props.incident.firstname + " "}
              {this.props.incident.secondname}
            </h3>
            <h3>
              <h4>Vehicle:</h4>
              {" " + this.props.incident.brand + ", "}
              {this.props.incident.type}
            </h3>
            <h3>
              <h4>Date:</h4>
              {" " + this.props.incident.date + ", "}
            </h3>
            <h3>
              <h4>Alert Status:</h4>
              {this.props.incident.processed ? " Processed" : " Not Processed"}
            </h3>
          </Jumbotron>
        </Row>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return {
    incident: state.incident.incident
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadIncident: id => dispatch(fetchIncident(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Incident);
