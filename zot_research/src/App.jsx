import Navbar from './assets/Navbar';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const userIsAdmin = true;

  return (
    <Router>
      <Navbar isAdmin={userIsAdmin} />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/AdminDashboard" element={<div>Admin Dashboard</div>} />
        <Route path="/AdminAllBusinesses" element={<div>All Businesses</div>} />
        <Route path="/AdminManageForms" element={<div>Manage Forms</div>} />
        <Route path="/AdminTeamManagement" element={<div>Team Management</div>} />
      </Routes>
    </Router>
  );
};

export default App
