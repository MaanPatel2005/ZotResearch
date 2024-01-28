import React, { useState } from 'react';
import './signup.css'

const SignUpPage = () => {
  // State variables to store user input
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  // Function to handle form submission
  const handleSignUp = (event) => {
    event.preventDefault();
    // Perform your sign-up logic here with the collected data
    console.log('Sign-up details:', { email, userId, password, username });
    // Add your logic to send data to a server or perform any necessary actions
  };

  return (
    <div className = "signupbox">
      <h2 className = "title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>
          Email:
          <input
          
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          User ID:
          <input
          
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
          
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Username:
          <input
          
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <button className = "button" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
    