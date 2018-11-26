import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";

const Main = (
  <Switch>
    <Route path="/" render={() => <Layout />} />
  </Switch>
);
export default Main;
