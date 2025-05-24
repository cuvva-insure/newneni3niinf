import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Users, User } from 'lucide-react';

const TripsPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'current' | 'past'>('current');

  return (
    <div className="w-full h-screen">
      <div className="h-[4%] w-full flex items-center justify-center">
        <div className="flex w-[90%] mx-auto rounded-xl overflow-hidden bg-zinc-800">
          <button
            className={`px-6 py-3 flex-1 font-bold text-slate-50 transition-all duration-300 w-[50%] ${
              activeTab === 'current' ? 'bg-purple-600' : 'bg-zinc-900'
            }`}
            onClick={() => setActiveTab('current')}
          >
            Current
          </button>
          <button
            className={`px-6 py-3 flex-1 font-bold text-slate-50 transition-all duration-300 w-[50%] ${
              activeTab === 'past' ? 'bg-purple-600' : 'bg-zinc-900'
            }`}
            onClick={() => setActiveTab('past')}
          >
            Past
          </button>
        </div>
      </div>

      <div className="h-[90%] w-full">
        <div className="h-full w-full flex items-center justify-center">
          <div className="font-bold h-10 w-10">Choose Current or Past ...</div>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 w-full bg-gray-800 py-6 flex justify-around shadow-lg">
        <div 
          className="flex flex-col items-center text-gray-400" 
          onClick={() => navigate('/portal/customer/page3')}
        >
          <Car size={20} />
          <span className="text-sm">Get insured</span>
        </div>
        <div 
          className="flex flex-col items-center text-gray-400"
          onClick={() => navigate('/portal/customer/page1')}
        >
          <Users size={20} />
          <span className="text-sm">Car clubs</span>
        </div>
        <div className="flex flex-col items-center text-purple-500">
          <Car size={20} />
          <span className="text-sm">Trips</span>
        </div>
        <div 
          className="flex flex-col items-center text-gray-400"
          onClick={() => navigate('/portal/customer/page4')}
        >
          <User size={20} />
          <span className="text-sm">Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default TripsPage;