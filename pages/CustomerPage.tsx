import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Users, HelpCircle, User } from 'lucide-react';

const CustomerPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col">
      <div className="min-h-screen bg-black text-white p-6 flex flex-col justify-between">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Car clubs</h1>
          <div className="flex space-x-4 text-purple-500">
            <HelpCircle size={20} />
            <Users size={20} />
          </div>
        </header>

        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="w-full h-32 object-cover mb-4 flex items-center justify-center">
              <img
                src="https://i.imgur.com/vpghHsn.png"
                alt="Find cars to borrow"
                className="w-auto h-full object-contain"
              />
            </div>
            <h2 className="text-xl font-bold">Find cars to borrow in your area</h2>
            <p className="text-gray-400 mt-2">
              Find cars or vans to borrow in your local area, owned by people on Cuvva who are happy to share theirs.
            </p>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg">
              View local car clubs
            </button>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="w-full h-32 object-cover mb-4 flex items-center justify-center">
              <img
                src="https://i.imgur.com/ZYebfXX.png"
                alt="Share your car"
                className="w-auto h-full object-contain"
              />
            </div>
            <h2 className="text-xl font-bold">Share your car, make money</h2>
            <p className="text-gray-400 mt-2">
              Start a car club for your friends, family, neighbours or co-workers. Help people get around and earn money too.
            </p>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg">
              Create your Cuvva car club
            </button>
            <p className="text-purple-500 mt-2 text-center cursor-pointer">How it works</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Tips and resources</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="relative bg-gray-700 w-20 h-20">
                  <img
                    src="https://i.imgur.com/m0EdGIQ.png"
                    alt="Coverage info"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">What's covered?</h3>
                  <p className="text-gray-400 text-sm">From insurance, to damage, to fines and parking tickets</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative bg-gray-700 w-20 h-20 rounded-xl">
                  <img
                    src="https://i.imgur.com/xvEVPR7.png"
                    alt="Car sharing tips"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Tips for sharing your car</h3>
                  <p className="text-gray-400 text-sm">How to get set up for a smooth car-sharing experience</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative bg-gray-700 w-20 h-20">
                  <img
                    src="https://i.imgur.com/3w5wrEF.png"
                    alt="Pricing guide"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Choosing what to charge</h3>
                  <p className="text-gray-400 text-sm">Earn money by charging people to borrow your car</p>
                </div>
              </div>
            </div>
            <p className="text-purple-500 mt-4 text-center cursor-pointer">All car sharing resources</p>
          </div>
        </div>

        <nav className="fixed bottom-0 left-0 w-full bg-gray-800 py-6 flex justify-around shadow-lg">
          <div className="flex flex-col items-center text-gray-400" onClick={() => navigate('/portal/customer/page3')}>
            <Car size={20} />
            <span className="text-sm">Get insured</span>
          </div>
          <div className="flex flex-col items-center text-purple-500">
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
    </div>
  );
};

export default CustomerPage;