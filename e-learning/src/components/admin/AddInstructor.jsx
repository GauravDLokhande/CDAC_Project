import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddInstructor = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log('New Instructor Added:', { username, email, password, contactInfo });

    // API Call to save the instructor data (Replace this with actual API request)
    
    navigate('/admin/manage-instructors'); // Redirect after submission
  };

  return (
    <div className="w-full max-w-4xl bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Add New Instructor</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter username"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-0"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter email address"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-0"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-0"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm password"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-0"
          />
        </div>

        {/* Contact Info */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Contact Info
          </label>
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
            placeholder="Enter contact info"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-0"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#424874] mt-4 text-white cursor-pointer hover:bg-[#Dcd6f7] hover:text-[#424874] font-medium rounded-md transition duration-300"
          >
            Add Instructor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInstructor;
