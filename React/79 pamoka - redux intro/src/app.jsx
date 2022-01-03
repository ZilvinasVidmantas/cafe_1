import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import store from './store';
import HomePage from './pages/home-page';
import UsersPanelPage from './pages/users-panel-page';

const App = () => (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users-panel" element={<UsersPanelPage />} />
      </Routes>
    </BrowserRouter>
  </ReduxProvider>
);

export default App;
