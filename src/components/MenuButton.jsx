import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MenuButton({ onToggleSidebar, ...rest }) {
  return (
    <button
      onClick={onToggleSidebar}
      {...rest}
      className="p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-200"
      aria-label="Toggle sidebar"
    >
      <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-gray-700" />
    </button>
  );
}
export default MenuButton;
