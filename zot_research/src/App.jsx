import Navbar from './assets/Navbar';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './routes/Profile';
import React from 'react';
import AddPost from './routes/Add_Post'

const App = () => {
  const userIsAdmin = true;

  return (
    <Router>
      <Navbar isAdmin= {userIsAdmin} />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/Dashboard" element={<div></div>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Messaging" element={<div></div>} />
        <Route path="/Post" element={<AddPost />} />
      </Routes>
    </Router>
  );
};

export default App
