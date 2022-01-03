import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';

const App = () => (
  <ReduxProvider store={store}>
    <div>
      This is app
    </div>
  </ReduxProvider>
);

export default App;
