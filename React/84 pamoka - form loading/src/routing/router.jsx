import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import PageLayout from '../components/layouts/page-layout';
import routes from './routes';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        {routes.map(({ page, path }) => (
          <Route key={path} path={path} element={page} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
