import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Policy: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    drivingLicense: '',
    address: '',
    mobile: '',
    email: '',
    validFrom: '',
    validUntil: '',
    vehicleReg: '',
    vin: '',
    make: '',
    color: '',
    model: '',
    yearManufactured: '',
    policyAmount: ''
  });

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all fields are filled
    const isFormValid = Object.values(formData).every(value => value.trim() !== '');
    
    if (!isFormValid) {
      alert('Please fill in all fields');
      return;
    }

    console.log('Form submitted:', formData);
    setShowSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
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
      <div className="flex-1 flex justify-center py-8 px-4 bg-black">
        <div className="w-full max-w-2xl">
          <div className="bg-[#2B3544] border-2 border-white/20 rounded-lg p-8">
            <h1 className="text-[#9333EA] text-4xl font-semibold mb-6 text-center">
              Create a Policy
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Date Of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Driving License Number</label>
                <input
                  type="text"
                  name="drivingLicense"
                  value={formData.drivingLicense}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Residential Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Valid From (Date & Time)</label>
                <input
                  type="datetime-local"
                  name="validFrom"
                  value={formData.validFrom}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Valid Until (Date & Time)</label>
                <input
                  type="datetime-local"
                  name="validUntil"
                  value={formData.validUntil}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Vehicle Reg</label>
                <input
                  type="text"
                  name="vehicleReg"
                  value={formData.vehicleReg}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">VIN</label>
                <input
                  type="text"
                  name="vin"
                  value={formData.vin}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Make</label>
                <input
                  type="text"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Color</label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Model</label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Year Manufactured</label>
                <input
                  type="date"
                  name="yearManufactured"
                  value={formData.yearManufactured}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white">Policy Amount</label>
                <input
                  type="number"
                  name="policyAmount"
                  value={formData.policyAmount}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <label 
                  className="text-[#9333EA] cursor-pointer hover:text-[#7E22CE] transition-colors"
                  onClick={handleUploadClick}
                >
                  Upload Image
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#9333EA] text-white py-3 rounded-lg text-lg hover:bg-[#7E22CE] transition-colors mt-8"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#2B3544] border-2 border-white/20 rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-[#9333EA] text-2xl font-semibold mb-6 text-center">
              Your policy has been created
            </h2>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full bg-[#9333EA] text-white py-3 rounded-lg text-lg hover:bg-[#7E22CE] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Policy;