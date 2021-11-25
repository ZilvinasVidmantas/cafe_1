import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Squares from './Squares';

ReactDOM.render(
  <React.StrictMode>
    <>
      <App />
      <Squares />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
