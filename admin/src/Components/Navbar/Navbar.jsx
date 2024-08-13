import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/logo.jpg';
import navProfile from '../../assets/profileicon.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={navlogo} alt="logo" />
        <p>Elegant Edge</p>
      </div>
      <h1>ADMINISTRATION</h1>
      <img src={navProfile} className='nav-profile' alt='profileicon' />
    </div>
  );
};

export default Navbar;
