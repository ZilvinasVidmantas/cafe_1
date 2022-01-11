import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import PageLayout from '../components/layouts/page-layout';
import { pageLayoutRoutes } from './routes';
import { VISITOR } from './auth-types';
import RequireVisitor from './require-visitor';
import ErrorPage from '../pages/error-page';

const buildedPageLayoutRoutes = pageLayoutRoutes.map(({ page, path, type }) => {
  let authentictedPage;
  switch (type) {
    case VISITOR:
      authentictedPage = <RequireVisitor>{page}</RequireVisitor>;
      break;
    default:
      authentictedPage = page;
  }
  return <Route key={path} path={path} element={authentictedPage} />;
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
