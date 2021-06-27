import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./pages/About";

import Home from "./pages/Home";

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>
    </Switch>
  );
};
