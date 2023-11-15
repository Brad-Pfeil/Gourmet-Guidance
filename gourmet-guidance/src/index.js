import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Make sure the path to App.js is correct
import './styles.css'; // Assuming styles.css is also in the src folder

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
