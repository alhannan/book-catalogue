import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import SignInPage from "../Pages/SignInPage/SignInPage";
import HomePage from "../Pages/HomePage/HomePage";

function AppRouter() {
  return (
    <>
      <Router>
        <Switch>
          <PublicRoute path="/" exact component={SignInPage} />
          <PrivateRoute path="/home" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default AppRouter;
