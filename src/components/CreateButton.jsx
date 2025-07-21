// src/components/CreateButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const CreateButton = ({ onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      {...rest}
      className="flex items-center justify-center w-24 h-10 rounded-full bg-gray-700 text-white text-sm font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-200"
      aria-label="Create"
    >
      <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
      <span className="px-2">Create</span>
    </button>
  );
};

export default CreateButton;
