// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = false;
//   return isAuthenticated ? children || <Outlet /> : <Navigate to="/signup" />;
// };

// export default PrivateRoute;

import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const privateRoutes = [
  '/dashboard',
  '/warehouseRegistration',
  '/ispRegistration',
  '/parcelRegistration',
  '/3plRegistration',
  '/transportRegistration',
  '/fspRegistration',
  '/distributionHubRegistration',
  '/insuranceForm',
  '/ulcDetails',
  '/consultingRegistration',
  '/freightRegistration',
  '/bookPallet',
  '/hireAFreight',
  '/warehouseListing'
];

const PrivateRoute = ({ isAuthenticated,children }) => {
  // const isAuthenticated = false; // authentication logic goes here
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    // Only redirect if the user tries to access a private route
    if (!isAuthenticated && privateRoutes.includes(location.pathname)) {
      navigate("/signup", {replace:true, state: { from: location } });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  return isAuthenticated ? children || <Outlet /> : null;
};

export default PrivateRoute;
