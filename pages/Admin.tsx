import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email === '000000@gmail.com' && formData.password === '000000') {
      sessionStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
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
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 bg-black">
        <div className="bg-[#2B3544] border-2 border-white/20 rounded-lg p-8 w-full max-w-md">
          <h2 className="text-[#9333EA] text-2xl font-semibold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white text-black"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white text-black"
            />
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-[#9333EA] text-white py-2 rounded hover:bg-[#7E22CE] transition-colors"
              >
                Login
              </button>
              <button
                type="button"
                className="flex-1 bg-[#374151] text-white py-2 rounded hover:bg-[#4B5563] transition-colors"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;