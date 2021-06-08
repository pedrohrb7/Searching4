import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeOld from "./pages/Home/HomeOld";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

import Home2 from "./pages/Home/Home2";

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeOld />
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
