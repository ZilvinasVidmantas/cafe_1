import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from '../store/auth/selectors';
import routes from './routes';

const RequireAdmin = ({ children }) => {
  const { pathname } = useLocation();
  const { loggedIn, user } = useSelector(authSelector);

  if (!loggedIn) {
    return <Navigate to={`${routes.LoginPage}?redirectTo=${pathname}`} />;
  }

  if (user && user.role !== 'admin') {
    return <Navigate to="/page-not-found" />;
  }

  return children;
};

export default RequireAdmin;
