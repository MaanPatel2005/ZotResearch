import Navbar from './assets/Navbar';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Profile from './routes/Profile';

const App = () => {
  const userIsAdmin = true;

  return (
    <Router>
      <Navbar isAdmin= {userIsAdmin} />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/Dashboard" element={<div></div>} />
        <Route path="/Messaging" element={<div></div>} />
        <Route path="/Post" element={<div></div>} />
      </Routes>
    </Router>
  );
};

export default App
