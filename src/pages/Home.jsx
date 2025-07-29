import React, { useState } from 'react';
import Headers from '../components/Headers';
import SideBar from '../components/SideBar';
import HomePage from '../components/HomePage';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(open => !open);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <SideBar isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Headers toggleSidebar={toggleSidebar} />
        <HomePage />
      </div>
    </div>
  );
}

export default Home;
