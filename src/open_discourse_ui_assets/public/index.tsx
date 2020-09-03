// @ts-ignore
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import { ToolsUndDaten } from "./pages/tools-und-daten";
import { Methodik } from "./pages/methodik";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Search } from "./pages/suche";

const GetImpactNow: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/methodik">
          <Methodik />
        </Route>
        <Route path="/tools-und-daten">
          <ToolsUndDaten />
        </Route>
        <Route path="/suche">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
};

render(<GetImpactNow />, document.getElementById("app"));
