// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import MenuButton from './MenuButton';
import SearchBar from './SearchBar';
import VoiceSearchButton from './VoiceSearchButton';
import NotificationBell from './NotificationBell';
import ProfileAvatar from './ProfileAvatar';
import CreateButton from './CreateButton';

const Navbar = ({ onSearch }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-10">
      <div className="flex items-center justify-between px-2 py-2 max-w-7xl mx-auto sm:px-4 md:px-6 lg:px-8">
        {/* Left Section: Menu Button and Logo */}
        {!isSearchExpanded && (
          <div className="flex items-center gap-2">
            <MenuButton onToggleSidebar={toggleSidebar} />
            <a href="/" className="flex items-center gap-1">
              <img src="./src/assets/youtube-logo.png" alt="Logo" className="h-10 sm:h-12" />
            </a>
          </div>
        )}

        {/* Search Section */}
        <div className="flex-1 flex items-center justify-center">
          {isSearchExpanded ? (
            <div className="w-full flex items-center">
              <button
                onClick={toggleSearch}
                className="flex items-center justify-center w-10 h-10 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                aria-label="Back"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 text-gray-600" />
              </button>
              <SearchBar onSearch={onSearch || (() => {})} className="flex-1 mx-2" />
            </div>
          ) : (
            <button
              onClick={toggleSearch}
              className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-black focus:outline-none md:hidden"
              aria-label="Toggle search"
            >
              <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
            </button>
          )}
          {!isSearchExpanded && (
            <div className="hidden md:flex items-center justify-center w-2/3">
              <SearchBar onSearch={onSearch || (() => {})} className="w-full" />
              <VoiceSearchButton onVoiceSearch={() => alert('Voice search not implemented')} />
            </div>
          )}
        </div>

        {/* Right Section: Create, Notifications, and Profile */}
        {!isSearchExpanded && (
          <div className="flex items-center gap-3 ml-4">
            <CreateButton onClick={() => alert('Create clicked!')} />
            <NotificationBell count={3} onClick={() => alert('Notifications clicked!')} />
            <ProfileAvatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              onClick={() => alert('Profile clicked!')}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;