import React, { useState, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch, ...rest }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (!e.target.value.trim()) {
      onSearch('');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-2" {...rest}>
      <form onSubmit={handleSearch}>
        <div className="flex items-center">
          <div className="flex-1 relative">
            <input
              type="search"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search"
              className="w-full pl-10 pr-10 py-2 text-sm border border-gray-300 rounded-l-full focus:border-red-500 focus:outline-none transition-colors duration-200"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-1.5 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faSearch} className="h-4 w-4 text-gray-700" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(SearchBar);
