import React from 'react';
import { Logo } from '../components/Logo';
import LoginForm from '../components/LoginForm';

const Portal: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col antialiased min-h-screen bg-black fullscreen-wrapper">
      <div className="min-h-screen flex items-center justify-center p-4 w-full">
        <LoginForm />
      </div>
    </div>
  );
};

export default Portal;