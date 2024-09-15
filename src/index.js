import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import global styles (optional)
import App from './App'; // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Rendering into the root div in index.html
);
