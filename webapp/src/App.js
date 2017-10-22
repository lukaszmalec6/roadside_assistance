import React, { Component } from "react";
import { Router, Route, browserHistory } from "react-router";

import Dashboard from "./Pages/Dashboard";
import Cars from "./Pages/Cars";
import Drivers from "./Pages/Drivers";
import Incidents from "./Pages/Incidents";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Dashboard} />
        <Route path="/cars" component={Cars} />
        <Route path="/drivers" component={Drivers} />
        <Route path="/incidents" component={Incidents} />
      </Router>
    );
  }
}

export default App;
