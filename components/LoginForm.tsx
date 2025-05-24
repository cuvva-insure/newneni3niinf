import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    policyKey: ''
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
    
    // Check for specific credentials
    if (
      formData.name === 'name' && 
      formData.email === 'email@gmail.com' && 
      formData.policyKey === '000000'
    ) {
      sessionStorage.setItem('customerAuth', 'true');
      navigate('/portal/customer/page1');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full max-w-md h-[80%] md:w-[90%] lg:w-[40%] bg-slate-700 border-2 border-slate-200 rounded-lg p-6 flex flex-col items-center space-y-4"
    >
      <Logo />
      
      <input
        className="w-full h-10 p-2 border-2 border-purple-200 rounded-md focus:outline-none focus:border-purple-400 transition-colors"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <input
        className="w-full h-10 p-2 border-2 border-purple-200 rounded-md focus:outline-none focus:border-purple-400 transition-colors"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <input
        className="w-full h-10 p-2 border-2 border-purple-200 rounded-md focus:outline-none focus:border-purple-400 transition-colors"
        type="text"
        name="policyKey"
        placeholder="Policy Key"
        value={formData.policyKey}
        onChange={handleChange}
        required
      />
      
      <div className="w-full flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-2">
        <button 
          type="submit" 
          className="w-full md:w-[48%] h-10 bg-purple-500 hover:bg-purple-400 text-white rounded-md transition-colors"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm