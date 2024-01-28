import Navbar from './assets/Navbar';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './routes/Profile';
<<<<<<< Updated upstream
import React from 'react';
import AddPost from './routes/Add_Post'
=======
import React, { useContext } from 'react';
import AddPost from './routes/Add_Post';
import { Auth } from './auth';
import Login from './login';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />} />
        {/* Add these routes if you have corresponding components */}
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
};

export default App
