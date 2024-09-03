import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = true;
  return isAuthenticated ? children || <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRoute;
