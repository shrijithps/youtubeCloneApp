import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery)}`);
      setSearchQuery(''); // Clear input after search
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-600">
          YouTube Clone
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 mx-4 max-w-xl">
          <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white focus-within:ring-2 focus-within:ring-red-300 focus-within:border-red-400 transition-all duration-200">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search videos..."
              className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 outline-none bg-transparent"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors duration-200"
              aria-label="Search"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </form>

        {/* Navigation Icons */}
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;