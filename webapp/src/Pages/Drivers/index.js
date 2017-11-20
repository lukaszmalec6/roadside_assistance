import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDrivers } from "../../Actions/actions";
import {
  Grid,
  Row,
  Col,
  Panel,
  ButtonToolbar,
  Button,
  PageHeader
} from "react-bootstrap";
import "../../theme.css";
import FlipMove from "react-flip-move";
class Drivers extends Component {
  componentWillMount() {
    this.props.loadDrivers();
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid" style={{ marginTop: "100px" }}>
          <PageHeader>
            <h3>Drivers:</h3>
          </PageHeader>
          <FlipMove duration={150} easing="ease">
            {this.props.drivers.map((driver, index) => (
              <Panel key={index} bsStyle="info">
                <div className="card-body">
                  <h3 className="card-title">
                    {driver.firstname + " "}
                    {driver.secondname + " "}
                  </h3>

                  <ButtonToolbar>
                    <Button bsStyle="warning">Update</Button>
                    <Button bsStyle="info">Delete</Button>
                    <Button bsStyle="success">Viev info</Button>
                  </ButtonToolbar>
                </div>
              </Panel>
            ))}
          </FlipMove>
        </Row>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return {
    drivers: state.drivers.drivers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadDrivers: () => dispatch(fetchDrivers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drivers);
