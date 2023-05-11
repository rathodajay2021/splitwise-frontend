import React, { Fragment } from "react";
import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { URL_LOGIN } from "Helpers/Path";

const ProtectedRoute = (props) => {
  const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);
  return (
    <Box style={{ height: "inherit" }}>
      {!isLoggedIn ? (
        <Navigate replace to={URL_LOGIN} />
      ) : (
        <Fragment>{props.children}</Fragment>
      )}
    </Box>
  );
};

export default ProtectedRoute;
