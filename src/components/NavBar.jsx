// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import MenuButton from './MenuButton';
import SearchBar from './SearchBar';
import VoiceSearchButton from './VoiceSearchButton';
import NotificationBell from './NotificationBell';
import ProfileAvatar from './ProfileAvatar';
import CreateButton from './CreateButton';

const Navbar = ({ onSearch }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const notificationCount = 3;

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
            <MenuButton
              onToggleSidebar={toggleSidebar}
              data-tooltip-id="menu-tooltip"
              data-tooltip-content="Toggle Sidebar"
            />
            <a
              href="/"
              className="flex items-center gap-1"
              data-tooltip-id="logo-tooltip"
              data-tooltip-content="Home"
            >
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
                className="flex items-center j  ustify-center w-10 h-10 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                aria-label="Back"
                data-tooltip-id="back-tooltip"
                data-tooltip-content="Back"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5 text-gray-600" />
              </button>
              <SearchBar
                onSearch={onSearch || (() => {})}
                className="flex-1 mx-2"
                data-tooltip-id="search-tooltip"
                data-tooltip-content="Search"
              />
            </div>
          ) : (
            <button
              onClick={toggleSearch}
              className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-black focus:outline-none md:hidden"
              aria-label="Toggle search"
              data-tooltip-id="search-toggle-tooltip"
              data-tooltip-content="Open Search"
            >
              <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
            </button>
          )}
          {!isSearchExpanded && (
            <div className="hidden md:flex items-center justify-center w-2/3">
              <SearchBar
                onSearch={onSearch || (() => {})}
                className="w-full"
                data-tooltip-id="search-tooltip"
                data-tooltip-content="Search"
              />
              <VoiceSearchButton
                onVoiceSearch={() => alert('Voice search not implemented')}
                data-tooltip-id="voice-search-tooltip"
                data-tooltip-content="Voice Search"
                className="ml-4"

              />
            </div>
          )}
        </div>

        {/* Right Section: Create, Notifications, and Profile */}
        {!isSearchExpanded && (
          <div className="flex items-center gap-3 ml-4">
            <CreateButton
              onClick={() => alert('Create clicked!')}
              data-tooltip-id="create-tooltip"
              data-tooltip-content="Create Content"
            />
            <NotificationBell
              count={notificationCount}
              onClick={() => alert('Notifications clicked!')}
              data-tooltip-id="notification-tooltip"
              data-tooltip-content={`Notifications (${notificationCount})`}
            />
            <ProfileAvatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              onClick={() => alert('Profile clicked!')}
              data-tooltip-id="profile-tooltip"
              data-tooltip-content="Profile"
            />
          </div>
        )}
      </div>

      {/* Add ReactTooltip components */}
      <ReactTooltip id="menu-tooltip" place="bottom" />
      <ReactTooltip id="logo-tooltip" place="bottom" />
      <ReactTooltip id="back-tooltip" place="bottom" />
      <ReactTooltip id="search-tooltip" place="bottom" />
      <ReactTooltip id="search-toggle-tooltip" place="bottom" />
      <ReactTooltip id="voice-search-tooltip" place="bottom" />
      <ReactTooltip id="create-tooltip" place="bottom" />
      <ReactTooltip id="notification-tooltip" place="bottom" />
      <ReactTooltip id="profile-tooltip" place="bottom" />
    </nav>
  );
};

export default Navbar;
