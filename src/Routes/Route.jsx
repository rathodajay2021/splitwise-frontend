import {
  URL_HOME_PAGE,
  URL_LOGIN,
  URL_RESET_PASSWORD,
  URL_SIGN_UP,
  URL_VERIFY_EMAIL,
  URL_WELCOME_PAGE,
} from "Helpers/Path";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route as ReactRoute, useNavigate } from "react-router-dom";
import { LogIn } from "Components/Pages/LogIn";
import RoutesList from "./RouterList";
import ProtectedRoute from "./ProtectedRoute";
import WrongPath from "Components/Common/NoPageFound/WrongPath";

const BEFORE_LOGIN_ACCESSIBLE_PATHS = [
  URL_LOGIN,
  URL_SIGN_UP,
  URL_RESET_PASSWORD,
  URL_VERIFY_EMAIL,
  URL_WELCOME_PAGE,
];

const Route = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);
  useEffect(() => {
    if (
      isLoggedIn &&
      BEFORE_LOGIN_ACCESSIBLE_PATHS?.includes(window?.location?.pathname)
    ) {
      navigate(URL_HOME_PAGE);
    }
  }, [isLoggedIn, navigate]);

  return (
    <Routes>
      <ReactRoute path={URL_LOGIN} element={<LogIn />} />
      <ReactRoute path={URL_WELCOME_PAGE} element={<LogIn />} />
      {RoutesList.map((route, index) => (
        <React.Fragment key={index}>
          {route.hasChildren ? (
            <ReactRoute
              path={route.path}
              element={<ProtectedRoute>{route.Component}</ProtectedRoute>}
            >
              {route.children}
            </ReactRoute>
          ) : (
            <ReactRoute
              path={route.path}
              element={<ProtectedRoute>{route.Component}</ProtectedRoute>}
            />
          )}
        </React.Fragment>
      ))}
      <ReactRoute path="*" element={<WrongPath />} />
    </Routes>
  );
};

export default Route;
