// @ts-ignore
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import { Home } from "./pages/home";

const GetImpactNow: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

render(<GetImpactNow />, document.getElementById("app"));
