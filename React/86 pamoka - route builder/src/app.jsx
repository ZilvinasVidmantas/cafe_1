import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { CssBaseline } from '@mui/material';
import store from './store';
import Router from './routing/router';

const App = () => (
  <CssBaseline>
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  </CssBaseline>
);

export default App;
