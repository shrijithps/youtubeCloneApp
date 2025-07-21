import React from 'react';
import Navbar from './NavBar';

const Headers = ({ onSearch }) => {
  return (
    <header>
      <Navbar onSearch={onSearch} />
    </header>
  );
};

export default Headers;
