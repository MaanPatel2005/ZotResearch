import React from 'react';
import App from './App.jsx';
import Login from './login';
import './index.css';
import ReactDOM from 'react-dom';
import LoginPage from './login.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <App />
  </React.StrictMode>,
);
