import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

import Home2 from "./pages/Home/Home";

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
