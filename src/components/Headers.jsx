import React from 'react';
import Navbar from './Navbar';

const Headers = ({ toggleSidebar, onSearch }) => (
  <header>
    <Navbar toggleSidebar={toggleSidebar} onSearch={onSearch} />
  </header>
);

export default Headers;
