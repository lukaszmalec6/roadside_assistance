import { Route } from "react-router-dom";
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import TopBar from "../Components/topBar";
import PanelSideMenu from "../Components/panelSideMenu";
export const PanelLayout = ({ component: Component, ...rest }) => {
  return (
    <Grid fluid>
      <Row className="show-grid">
        <TopBar />
      </Row>
      <Row className="show-grid">
        <Col xs={12} md={2} lg={2}>
          <PanelSideMenu path={rest.path} />
        </Col>
        <Col xs={12} md={10} lg={10}>
          <Route
            {...rest}
            render={matchProps => (
              <div>
                <Component {...matchProps} />
              </div>
            )}
          />
        </Col>
      </Row>
    </Grid>
  );
};
export default PanelLayout;
