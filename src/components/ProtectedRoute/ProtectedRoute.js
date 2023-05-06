import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ children, ...props }) => {
  return props.isLoggedIn ? children : <Navigate to='/signin' replace />;
};

export default ProtectedRouteElement;
