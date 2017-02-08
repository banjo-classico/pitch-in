import React from "react";
import { Route, IndexRedirect, Redirect } from "react-router";

import App from "./App";
import Home from "./Home";

const routes = () => (
  <Route component={App}>
    <Route path="/">
      <IndexRedirect to={"/home"} />
      <Route path={"/home"} component={Home} />
      <Redirect from="*" to={"/home"} />
    </Route>
  </Route>
);

export default routes;
