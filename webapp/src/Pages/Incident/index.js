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
import ApiService from "../../ApiService";
import { Redirect } from "react-router";
import TiArrowBackOutline from "react-icons/lib/ti/arrow-back-outline";

var api = new ApiService();
class Incident extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }
  erase = id => {
    api.deleteIncident(id).then(response => {
      if (window.confirm(response)) {
        console.log(this.state);
        return <Redirect to="/dashboard" />;
      } else {
        console.log("hh");
      }
    });
  };
  markasprocessed = id => {
    api.markIncidentAsRead(id).then(response => {
      if (window.confirm(response)) {
        window.location.reload();
      }
    });
  };
  componentDidMount() {
    this.props.loadIncident(this.props.params.id);
  }
  render() {
    return (
      <Grid>
        <Row className="show-grid" style={{ marginTop: "100px" }}>
          <PageHeader>Incident's details </PageHeader>
          <ButtonToolbar style={{ marginBottom: "30px" }}>
            <Button bsSize="large" bsStyle="info" href="/incidents">
              <TiArrowBackOutline color="white" />
            </Button>
            <Button
              disabled={this.props.incident.processed}
              bsSize="large"
              bsStyle="warning"
              onClick={() => this.markasprocessed(this.props.incident.id)}
            >
              Got it!
            </Button>
          </ButtonToolbar>
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
              <h4>Directions:</h4>
              latitude: {this.props.incident.latitude}
            </h3>
            <h3>longitude: {this.props.incident.longitude}</h3>
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
