import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...otherProps }) {
  const isAuthenticated = true;

  return (
    <Route
      component={() => (isAuthenticated ? <Component /> : <Redirect to="/" />)}
      {...otherProps}
    />
  );
}

export default PrivateRoute;
