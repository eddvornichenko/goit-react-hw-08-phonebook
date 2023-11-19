import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  // Redirecting to redirectTo if the user is already authorized, otherwise rendering the required Component
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component; 
};

export default PublicRoute;