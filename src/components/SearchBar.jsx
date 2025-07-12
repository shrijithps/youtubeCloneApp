import React, { useState, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    if (searchQuery.trim()) {
      onSearch(searchQuery); // Pass search query to parent (e.g., Home.jsx)
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (!e.target.value.trim()) {
      onSearch(''); // Reset search if input is cleared
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto"> {/* Centered with max width */}
      <form onSubmit={handleSearch}> {/* Wrap input and button in form */}
        <div className="flex items-center">
          <div className="flex-1 relative">
            <input
              type="search"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-full focus:border-blue-500 focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            />
          </div>
          <button
            type="submit" // Use type="submit" for form submission
            className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(SearchBar);
