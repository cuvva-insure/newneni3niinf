import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const lastLogin = new Date();
  lastLogin.setDate(lastLogin.getDate() - 4);
  lastLogin.setHours(lastLogin.getHours() - 2);
  lastLogin.setMinutes(lastLogin.getMinutes() - 12);
  lastLogin.setSeconds(lastLogin.getSeconds() - 10);

  const timeDiff = {
    days: 4,
    hours: 2,
    minutes: 12,
    seconds: 10
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  const handleCreatePolicy = () => {
    navigate('/admin/policy');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#9333EA]">
      {/* Header */}
      <div className="h-12 flex items-center justify-between px-4">
        <img 
          src="https://i.imgur.com/ZnIulUl.png" 
          alt="Cuvva"
          className="h-5 brightness-0 invert"
        />
        <button
          onClick={handleLogout}
          className="bg-[#A855F7] text-white px-4 py-1 rounded hover:bg-[#9333EA] transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 bg-black">
        <div className="bg-[#2B3544] border-2 border-white/20 rounded-lg p-8 w-full max-w-2xl">
          <h1 className="text-[#9333EA] text-4xl font-semibold mb-6 text-center">
            Dashboard
          </h1>
          
          <div className="text-white text-xl text-center mb-8">
            {timeDiff.days} Days {timeDiff.hours} Hours {timeDiff.minutes} Minutes {timeDiff.seconds} Seconds
          </div>

          <button
            onClick={handleCreatePolicy}
            className="w-full bg-[#9333EA] text-white py-3 rounded-lg text-lg hover:bg-[#7E22CE] transition-colors"
          >
            Create a policy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;