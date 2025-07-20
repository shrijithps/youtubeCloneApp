// src/components/ProfileAvatar.jsx
import React from 'react';

const ProfileAvatar = ({ src, alt = 'User avatar', onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      {...rest}
      className="p-1 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
      aria-label="User profile"
    >
      <img
        src={src || 'https://via.placeholder.com/32'}
        alt={alt}
        className="h-8 w-8 rounded-full object-cover"
      />
    </button>
  );
};

export default ProfileAvatar;
