import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navbar.css';

function Navbar({ isAdmin }) {

  const adminList = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Profile', path: '/profile' },
    { name: 'Messaging', path: '/messaging' },
    { name: 'Make Posting', path: '/post' },
  ];

  const navList = isAdmin ? adminList : [];

  return (
    <>
      <nav className='navbar'>
        <ul>
          {navList.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default Navbar;
