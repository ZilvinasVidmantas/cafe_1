import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../store/auth/selectors';
import { HomeRouteConnector } from './route-connectors';

const RequireVisitor = ({ children }) => {
  const { loggedIn } = useSelector(authSelector);

  if (loggedIn) {
    return <Navigate to={HomeRouteConnector.path} />;
  }

  return children;
};

export default RequireVisitor;
