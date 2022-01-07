import React from "react";
import { Redirect, Route } from "react-router-dom";
import { auth, authAdmin } from "../../helpers/helper";

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (auth.isAutheticate === true ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
}

export function PrivateRouteAdmin({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (authAdmin.isAuthenticatedAdmin === true ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
}
