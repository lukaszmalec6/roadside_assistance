import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCars } from "../../Actions/actions";
import { Grid, Row, Col, Panel, ButtonToolbar, Button } from "react-bootstrap";
import "../../theme.css";
import FlipMove from "react-flip-move";
class Cars extends Component {
  componentWillMount() {
    this.props.loadCars();
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid" style={{ marginTop: "100px" }}>
          <h3>Registered cars:</h3>
          <FlipMove duration={150} easing="ease">
            {this.props.cars.map((car, index) => (
              <Panel key={index} bsStyle="info">
                <div className="card-body">
                  <h3 className="card-title">Brand: {car.brand + " "}</h3>
                  <h4>Type: {car.type + " "}</h4>

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
  console.log(state);
  return {
    cars: state.cars.cars
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCars: () => dispatch(fetchCars())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
