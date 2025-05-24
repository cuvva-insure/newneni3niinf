import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-48 h-48 mb-4">
      <img 
        src="https://i.imgur.com/ZnIulUl.png" 
        alt="Logo" 
        className="w-full h-full object-contain brightness-0 invert"
      />
    </div>
  );
};