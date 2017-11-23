import { Route } from "react-router-dom";
import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import TopBar from "../Components/topBar";
import PanelSideMenu from "../Components/panelSideMenu";
export const PanelLayout = ({ component: Component, ...rest }) => {
  let client = JSON.parse(localStorage.getItem("client"));
  if (client === null) {
    return (
      <Grid>
        <div>
          <h1>No permissions. Please log in</h1>
        </div>
      </Grid>
    );
  } else {
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
                  <Component
                    clientid={client.id}
                    permissions={client.role === "administrator" ? true : false}
                    {...matchProps}
                  />
                </div>
              )}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
};
export default PanelLayout;
