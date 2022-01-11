import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import PageLayout from '../components/layouts/page-layout';
import { pageLayoutRoutes } from './route-connectors';
import { VISITOR } from './auth-types';
import RequireVisitor from './require-visitor';
import ErrorPage from '../pages/error-page';

const buildedPageLayoutRoutes = pageLayoutRoutes.map(({ Page, route, auth }) => {
  let authentictedPage;
  switch (auth) {
    case VISITOR:
      authentictedPage = <RequireVisitor><Page /></RequireVisitor>;
      break;
    default:
      authentictedPage = <Page />;
  }
  return <Route key={route} path={route} element={authentictedPage} />;
});

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        {buildedPageLayoutRoutes}
        <Route path="*" element={<ErrorPage />} />
      </Route>

    </Routes>
  </BrowserRouter>
);

export default Router;
