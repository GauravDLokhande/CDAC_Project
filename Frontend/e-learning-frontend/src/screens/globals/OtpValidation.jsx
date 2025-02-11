import { useState } from "react";
import login_bg from "../../assets/login_bg.jpg";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function OtpValidation() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const location = useLocation();
  const email = location.state?.email || ""; // Retrieve the email



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!otp.trim()) {
      setError("OTP is required.");
      return;
    }

    try {
      setError("");
      setSuccess("");

      console.log("Email="+email);

      const response = await axios.post('http://localhost:8080/users/otpvalidate', { email, otp }, {
      headers: { "Content-Type": "application/json" }  
        });


      if (response.status === 200) {
        setSuccess("OTP has been successfully validated!");
        setOtp("");
        console.log("In side otp Validation page 200 status...")
        // navigate("/resetpassword")
        setTimeout(() => navigate('/resetpassword', { state: { email } }), 1000);

      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to validate OTP. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <img
        src={login_bg}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter blur-xs"
      />

      <div className="isolate aspect-video w-full max-w-md rounded-xl bg-white/20 backdrop-blur-lg shadow-lg ring-1 ring-black/5 relative z-10 p-7">
        <main className="w-full">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-[#424874] mb-2">OTP Validation</h1>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  <div>
                    <label htmlFor="otp" className="block text-sm font-bold ml-1 mb-2 text-[#424874]">
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#424874] focus:ring-2 focus:ring-[#424874] transition-all duration-300"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                  </div>

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

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#424874] mt-1 text-white text-lg font-semibold p-2 transition-colors duration-300 hover:bg-[#a6b1e1]"
                  >
                    Validate OTP
                  </button>
                </div>
              </form>
            </div>

            <p className="mt-3 flex justify-center text-center divide-x divide-gray-300">
              <Link
                className="pl-3 inline-flex items-center text-sm text-[#424874] hover:underline hover:text-[#a6b1e1] transition-colors duration-300"
                to="/ContactUs"
              >
                Contact us!
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}