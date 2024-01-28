// App.jsx
import Navbar from './assets/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './routes/Profile';
import React from 'react';
import AddPost from './routes/Add_Post';
import { Auth } from './auth';
import CreateProfile from './routes/CreateProfile';
import Dashboard from './routes/Dashboard';

const App = () => {
  const userIsAdmin = true; // Replace with your actual logic

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />}/>
        <Route path="/Profile" element={<><Navbar isAdmin={userIsAdmin} /><Profile /></>}/>
        <Route path="/Messaging" element={<div>Messaging</div>} />
        <Route path="/Post" element={<><Navbar isAdmin={userIsAdmin} /><AddPost /></>}/>
        <Route path="/CreateProfile" element={<CreateProfile />}/>
        <Route path="/Dashboard" element={<><Navbar isAdmin={userIsAdmin} /><Dashboard /></>}/>
        {/* Add these routes if you have corresponding components */}
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
