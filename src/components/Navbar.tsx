// src/components/Navbar.tsx

import React from 'react';
import './Navbar.css'; // You can add your own styling here

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#navbar">Navbar</a></li>
        <li><a href="#cards">Cards</a></li>
        <li><a href="#buttons">Buttons</a></li>
        {/* Add more sections as necessary */}
      </ul>
    </nav>
  );
};

export default Navbar;
