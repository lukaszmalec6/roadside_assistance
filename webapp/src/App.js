import React, { Component } from "react";
import { Router, Route, browserHistory } from "react-router";

import Dashboard from "./Pages/Dashboard";
import Cars from "./Pages/Cars";
import Drivers from "./Pages/Drivers";
import Incidents from "./Pages/Incidents";
import { slide as Menu } from "react-burger-menu";
import Incident from "./Pages/Incident";
import "./theme.css";
class App extends Component {
  render() {
    return (
      <div>
        <Menu styles={styles}>
          <a id="dashboard" className="link-3" href="/">
            DASHBOARD
          </a>
          <a id="incidents" className="link-3" href="/incidents">
            INCIDENTS
          </a>
          <a id="drivers" className="link-3" href="/drivers">
            DRIVERS
          </a>
          <a id="cars" className="link-3" href="/cars">
            CARS
          </a>
        </Menu>
        <Router history={browserHistory}>
          <Route path="/" component={Dashboard} />
          <Route path="/cars" component={Cars} />
          <Route path="/drivers" component={Drivers} />
          <Route path="/incidents" component={Incidents} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/incidents/:id" component={Incident} />
        </Router>
      </div>
    );
  }
}
var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

export default App;
