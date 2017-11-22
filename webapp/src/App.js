import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Cars from "./Pages/Cars";
import Drivers from "./Pages/Drivers";
import Incidents from "./Pages/Incidents";
import LandingPage from "./Pages/LandingPage/view";
import Incident from "./Pages/Incident";
import LandingPageLayout from "./Layout/landingPage";
import "./theme.css";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <LandingPageLayout path="/" component={LandingPage} />
          <Route path="/cars" component={Cars} />
          <Route path="/drivers" component={Drivers} />
          <Route path="/incidents" component={Incidents} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/incidents/:id" component={Incident} />
        </Switch>
      </Router>
    );
  }
}

export default App;
