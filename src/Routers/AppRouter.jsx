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
          <PrivateRoute path="/home" component={HomePage} />
          <PublicRoute exact path="/" component={SignInPage} />
        </Switch>
      </Router>
    </>
  );
}

export default AppRouter;
