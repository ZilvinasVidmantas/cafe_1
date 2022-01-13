import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../store/auth/selectors';
import routes from './routes';

const RequireVisitor = ({ children }) => {
  const { loggedIn, redirectTo } = useSelector(authSelector);

  if (loggedIn) {
    return <Navigate to={redirectTo ?? routes.HomePage} />;
  }

  return children;
};

export default RequireVisitor;
