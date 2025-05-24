import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Users, HelpCircle, User, Search, Check } from 'lucide-react';

const InsurancePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col">
      <div className="min-h-screen bg-black text-white p-6 flex flex-col gap-[2rem]">
        <header className="mb-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Get insured</h1>
          <HelpCircle className="text-purple-500 text-2xl" />
        </header>

        <div className="bg-gray-900 p-4 rounded-xl flex justify-center items-center space-x-2">
          <Search className="text-gray-400" />
          <div 
            className="bg-transparent text-white outline-none flex-grow flex items-center justify-center font-[Orbitron] uppercase tracking-wider opacity-55"
            style={{ fontFamily: '"Charles Wright", sans-serif', fontWeight: 'bold' }}
          >
            ENTER NUMBER PLATE
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center mt-6">
          <div className="flex justify-center items-center mb-4">
            <div className="p-3 rounded-full relative">
              <img
                src="https://i.imgur.com/kZqVkBj.png"
                alt="Insurance Graphic"
                className="w-48 h-48 object-cover rounded-full"
              />
            </div>
          </div>
          
          <h2 className="text-lg font-semibold">Get insured from 1 hour up to 28 days</h2>
          
          <ul className="text-gray-400 mt-4 text-left space-y-2">
            <li className="flex items-center">
              <Check className="text-purple-500 mr-2" /> Only pay for what you need
            </li>
            <li className="flex items-center">
              <Check className="text-purple-500 mr-2" /> Get insured in minutes
            </li>
            <li className="flex items-center">
              <Check className="text-purple-500 mr-2" /> Fully comprehensive cover
            </li>
          </ul>

          <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg">
            Get a quote
          </button>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 w-full bg-gray-800 py-6 flex justify-around shadow-lg">
        <div className="flex flex-col items-center text-purple-500">
          <Car size={20} />
          <span className="text-sm">Get insured</span>
        </div>
        <div className="flex flex-col items-center text-gray-400" onClick={() => navigate('/portal/customer/page1')}>
          <Users size={20} />
          <span className="text-sm">Car clubs</span>
        </div>
        <div className="flex flex-col items-center text-gray-400" onClick={() => navigate('/portal/customer/page5')}>
          <Car size={20} />
          <span className="text-sm">Trips</span>
        </div>
        <div className="flex flex-col items-center text-gray-400" onClick={() => navigate('/portal/customer/page4')}>
          <User size={20} />
          <span className="text-sm">Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default InsurancePage;