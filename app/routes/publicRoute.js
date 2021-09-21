import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, trans, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("Token") && restricted ? (
          <Redirect to="/" />
        ) : (
            <Component {...props} trans={trans} />
          )
      }
    />
  );
};

export default PublicRoute;
