import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeOld from "./pages/Home/HomeOld";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

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

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/bololo">
        <Home2 />
      </Route>

      <Route>
        <Notfound />
      </Route>
    </Switch>
  );
};
