import React from 'react';
import Navbar from './NavBar';

const Headers = ({ toggleSidebar, onSearch }) => (
  <header>
    <Navbar toggleSidebar={toggleSidebar} onSearch={onSearch} />
  </header>
);

export default Headers;
