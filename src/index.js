import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthStore } from './contexts/AuthStore';
ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <AuthStore>
      <App />
    </AuthStore>
  </Router>
, document.getElementById('root'));