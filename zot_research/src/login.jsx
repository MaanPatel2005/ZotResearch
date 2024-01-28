import React, { useState } from 'react';
import './login.css'
import axios from 'axios';


const LoginPage = () => {
  // State variables to store username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userID, setUserID] = useState('');

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/student_login/', { username, password });
        console.log(response.data);
        setUserID(response.data);
         // Store response data in state
    } catch (error) {
        console.error('Error logging in:', error);
        setError('Invalid username or password', error);
    }

    // Reset form fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <img src="uci_research_logo.jpg" alt="UCI RESEARCH LOGO" style={{
        height: 150
      }}/>
      <h2 className = "title">Welcome to ZotResearch</h2>
      <form onSubmit={handleLogin}>
        <label className = "title">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className = "title">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;