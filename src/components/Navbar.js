import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const history = useHistory();

  const handleLogout = () => {
    setIsLoggedIn(false); 
    // history.push('/');
  };

  return (
    <nav className='navbar'>
      <div className='container'>
        <Link to='/' className='nav-link'>
          Home
        </Link>
        <Link to='/MyBooking' className='nav-link'>
          My Booking
        </Link>
        <Link to='/ContactPage' className='nav-link'>
          Contact
        </Link>
        <Link to='/Aboutus' className='nav-link'>
          About Us
        </Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="nav-link logout-button">
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;