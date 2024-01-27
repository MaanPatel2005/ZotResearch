import React, { useState } from 'react';
import './login.css'

const LoginPage = () => {
  // State variables to store username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Predefined constants for authentication
    const validUsername = 'puravp@uci.edu';
    const validPassword = 'MaanIsCute';

    // Check if entered username and password are valid
    if (username === validUsername && password === validPassword) {
      // Successful login
      console.log('Login successful!');
      setError('');
    } else {
      // Failed login
      setError('Invalid username or password. Try again.');
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
      <h2>Welcome to ZotResearch</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
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