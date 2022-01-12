import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from '../store/auth/selectors';
import { LoginRoute } from './routes';

const RequireLoggedIn = ({ children }) => {
  const { pathname } = useLocation();
  const { loggedIn } = useSelector(authSelector);

  if (!loggedIn) {
    return <Navigate to={`${LoginRoute}?redirectTo=${pathname}`} />;
  }

  return children;
};

export default RequireLoggedIn;
