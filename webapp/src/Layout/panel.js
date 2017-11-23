import { Route } from "react-router-dom";
import React, { Component } from "react";
export const PanelLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div>
          <h3>s</h3>
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};
export default PanelLayout;
