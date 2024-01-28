import React from 'react';
import App from './App.jsx'
import './index.css';
import ReactDOM from 'react-dom';
import TextChat from './TextChat.jsx'
// import LoginPage from './login.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TextChat />
  </React.StrictMode>,
);
