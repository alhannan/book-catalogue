import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, ...otherProps }) {
  const isAuthenticated = useSelector((state) => state.auth.user.uid);

  return (
    <Route
      component={() => (isAuthenticated ? <Component /> : <Redirect to="/" />)}
      {...otherProps}
    />
  );
}

export default PrivateRoute;
