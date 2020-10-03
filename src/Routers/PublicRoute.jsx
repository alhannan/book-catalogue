import React from "react";
import { Redirect, Route } from "react-router-dom";

function PublicRoute({ component: Component, ...otherProps }) {
  const isAuthenticated = false;

  return (
    <Route
      {...otherProps}
      component={() =>
        isAuthenticated ? <Redirect to="/home" /> : <Component />
      }
    />
  );
}

export default PublicRoute;
