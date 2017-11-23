import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Cars from "./Pages/Cars";
import Car from "./Pages/Car";
import Drivers from "./Pages/Drivers";
import Driver from "./Pages/Driver";
import Incidents from "./Pages/Incidents";
import LandingPage from "./Pages/LandingPage/view";
import Incident from "./Pages/Incident";
import LandingPageLayout from "./Layout/landingPage";
import PanelLayout from "./Layout/panel";
import "./theme.css";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PanelLayout exact path="/cars" component={Cars} />
          <PanelLayout path="/cars/:id" component={Car} />
          <PanelLayout exact path="/drivers" component={Drivers} />
          <PanelLayout path="/drivers/:id" component={Driver} />
          <PanelLayout exact path="/incidents" component={Incidents} />
          <PanelLayout exact path="/dashboard" component={Dashboard} />
          <PanelLayout path="/incidents/:id" component={Incident} />
          <LandingPageLayout path="/" component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
