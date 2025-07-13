import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

const VoiceSearchButton = ({ onVoiceSearch }) => {
  return (
    <button
      onClick={onVoiceSearch}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border-none border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-200"
      aria-label="Voice search"
    >
      <FontAwesomeIcon icon={faMicrophone} className="h-5 w-5 text-gray-600" />
    </button>
  );
};

export default VoiceSearchButton;