import React from 'react';
import Navbar from './Navbar';

const Headers = ({ onSearch }) => {
  return (
    <header>
      <Navbar onSearch={onSearch} />
    </header>
  );
};

export default Headers;