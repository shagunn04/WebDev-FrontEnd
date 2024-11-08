import React from 'react';
import ReactDOM from 'react-dom'; // Change from 'react-dom/client' to 'react-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';

// Use ReactDOM.render instead of createRoot
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Specify the root element as the second argument
);

// Optional: report web vitals
reportWebVitals();
