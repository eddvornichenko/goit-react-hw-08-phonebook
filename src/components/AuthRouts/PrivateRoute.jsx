import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  // Redirecting to redirectTo if the user is not authorized, otherwise rendering the required Component
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component; 
};

export default PrivateRoute;