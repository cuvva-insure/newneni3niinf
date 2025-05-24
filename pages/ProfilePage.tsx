import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Users, User, HelpCircle, Camera, ChevronRight } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="bg-black text-white min-h-screen w-full p-4">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-bold">Profile</span>
          <HelpCircle className="text-purple-400 text-xl" />
        </div>

        <div className="flex flex-col items-center mb-6 h-[30%]">
          <div className="bg-purple-600 p-4 rounded-full">
            <Camera className="text-white text-2xl" />
          </div>
          <p className="text-gray-400">Member since February 2025</p>
        </div>

        <h3 className="text-gray-500 uppercase text-sm mb-2">Account</h3>
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Account details</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Payment methods</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="flex gap-2 items-center">
                <span className="text-black bg-white flex items-center justify-center px-3 rounded">
                  <svg viewBox="0 0 640 512" height="22" width="22">
                    <path d="M116.9 158.5c-7.5 8.9-19.5 15.9-31.5 14.9-1.5-12 4.4-24.8 11.3-32.6 7.5-9.1 20.6-15.6 31.3-16.1 1.2 12.4-3.7 24.7-11.1 33.8m10.9 17.2c-17.4-1-32.3 9.9-40.5 9.9-8.4 0-21-9.4-34.8-9.1-17.9.3-34.5 10.4-43.6 26.5-18.8 32.3-4.9 80 13.3 106.3 8.9 13 19.5 27.3 33.5 26.8 13.3-.5 18.5-8.6 34.5-8.6 16.1 0 20.8 8.6 34.8 8.4 14.5-.3 23.6-13 32.5-26 10.1-14.8 14.3-29.1 14.5-29.9-.3-.3-28-10.9-28.3-42.9-.3-26.8 21.9-39.5 22.9-40.3-12.5-18.6-32-20.6-38.8-21.1m100.4-36.2v194.9h30.3v-66.6h41.9c38.3 0 65.1-26.3 65.1-64.3s-26.4-64-64.1-64h-73.2zm30.3 25.5h34.9c26.3 0 41.3 14 41.3 38.6s-15 38.8-41.4 38.8h-34.8V165zm162.2 170.9c19 0 36.6-9.6 44.6-24.9h.6v23.4h28v-97c0-28.1-22.5-46.3-57.1-46.3-32.1 0-55.9 18.4-56.8 43.6h27.3c2.3-12 13.4-19.9 28.6-19.9 18.5 0 28.9 8.6 28.9 24.5v10.8l-37.8 2.3c-35.1 2.1-54.1 16.5-54.1 41.5.1 25.2 19.7 42 47.8 42zm8.2-23.1c-16.1 0-26.4-7.8-26.4-19.6 0-12.3 9.9-19.4 28.8-20.5l33.6-2.1v11c0 18.2-15.5 31.2-36 31.2zm102.5 74.6c29.5 0 43.4-11.3 55.5-45.4L640 193h-30.8l-35.6 115.1h-.6L537.4 193h-31.6L557 334.9l-2.8 8.6c-4.6 14.6-12.1 20.3-25.5 20.3-2.4 0-7-.3-8.9-.5v23.4c1.8.4 9.3.7 11.6.7z" />
                  </svg>
                </span>
                <span>Apple pay</span>
              </span>
              <ChevronRight />
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Apply discount code</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Refer a friend</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Your discounts</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-between mb-4">
          <div className="flex-1">
            <p className="font-bold">Refer a friend and</p>
            <p className="font-bold">both get £10 off</p>
            <button className="mt-2 bg-purple-600 bg-opacity-50 px-4 py-2 rounded-lg text-purple-600">
              Invite friends
            </button>
          </div>
          <div className="w-32">
            <img
              src="https://i.imgur.com/1RlrUy9.png"
              alt="Refer a friend"
              className="w-full h-auto"
            />
          </div>
        </div>

        <h3 className="text-gray-500 uppercase text-sm mb-2">Car sharing</h3>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Bank details</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>
        </div>

        <h3 className="text-gray-500 uppercase text-sm mb-2">Support</h3>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Help centre</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Chat to customer support</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Previous chats</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>
        </div>

        <h3 className="text-gray-500 uppercase text-sm mb-2">Feedback</h3>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Share an idea</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Rate the app</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>
        </div>

        <h3 className="text-gray-500 uppercase text-sm mb-2">About</h3>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Blog</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Careers at cuuva</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Legal</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>
        </div>

        <h3 className="text-gray-500 uppercase text-sm mb-2">Settings</h3>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Change icon</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Clear an local data and reset app</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>Clear local data only</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <span>App tracking transparency</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChevronRight />
            </div>
          </div>
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
        <div 
          className="flex flex-col items-center text-gray-400"
          onClick={() => navigate('/portal/customer/page5')}
        >
          <Car size={20} />
          <span className="text-sm">Trips</span>
        </div>
        <div className="flex flex-col items-center text-purple-500">
          <User size={20} />
          <span className="text-sm">Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default ProfilePage;