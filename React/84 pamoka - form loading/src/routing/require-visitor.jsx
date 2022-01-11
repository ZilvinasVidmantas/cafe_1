import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../store/auth/selectors';
import { HomeRoute } from './routes';

const RequireVisitor = ({ children }) => {
  const { loggedIn } = useSelector(authSelector);

  if (loggedIn) {
    return <Navigate to={HomeRoute.path} />;
  }

  return children;
};

export default RequireVisitor;
