import { useState } from "react";
import login_bg from "../../assets/login_bg.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [password, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || ""; // Retrieve the email

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Reset error and success messages
    setError("");
    setSuccess("");

    try {
       // Prepare the data to send
    const data = { email, password };

    // Send the POST request to the backend
    const response = await axios.post('http://localhost:8080/users/setpassword', data, {
      headers: {
        'Content-Type': 'application/json', // Set content type as JSON
      },
    });

      if (response.status === 200) {
        setSuccess("Password has been successfully reset!");
        setNewPassword("");
        setConfirmPassword("");
        // Optionally, redirect the user to login or another page
        setTimeout(() => navigate("/login"), 2000); // Navigate to login page after 2 seconds
      } else {
        setError("Failed to reset password. Please try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to reset password. Please try again."
      );
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <img
        src={login_bg}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />
      {/* Content */}
      <div className="relative z-10 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white/30 backdrop-blur-3xl rounded-lg p-8 shadow-2xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 mb-7 text-center text-2xl font-bold tracking-tight text-gray-900">
              Reset Your Password
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password Field */}
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-900">
                New Password
              </label>
              <div className="mt-2">
                <input
                  id="new-password"
                  name="new-password"
                  type="password"
                  required
                  autoComplete="new-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                  value={password}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-900">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Error or Success Messages */}
            {error && (
              <p className="text-xs text-red-600 mt-2" aria-live="assertive">
                {error}
              </p>
            )}
            {success && (
              <p className="text-xs text-green-600 mt-2" aria-live="polite">
                {success}
              </p>
            )}

            {/* Submit Button */}
            <div>
              <div className="w-full rounded-lg bg-[#424874] mt-4 text-white text-lg font-semibold">
                <button type="submit" className="w-full p-2 text-[#f4eeff]">
                  Reset Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;