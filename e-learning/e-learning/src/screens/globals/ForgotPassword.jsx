import { useState } from "react";
import login_bg from "../../assets/login_bg.jpg";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';  // Import Axios

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // For success message
  console.log(email)
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (event) => { 
    event.preventDefault();
    const emailRegex = /.+@.+\..+/; // Simplified email regex
  
    if (!email || !emailRegex.test(email)) {
      setError("Please include a valid email address so we can get back to you");
      setSuccess(""); // Clear success message
      return;
    }
  
    try {
      setError("");
      setSuccess("");
  
      // Call the API here
      const response = await axios.post('http://localhost:8080/users/otpgenerate', { email });

  
      // Check the status code manually to prevent 400 from triggering catch
      if (response.status === 200) {
        setSuccess("Password reset link has been sent to your email!");
        setEmail("");  // Clear the email field
        console.log("It's 200..");
  
        setTimeout(() => navigate('/otpvalidation', { state: { email } }), 1000);
      } 
       else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      if (err.response) {
        setError("Invalid Error");
      } else {
        setError("Failed to send reset link. Please try again.");
      }
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
              <h1 className="block text-2xl font-bold text-[#424874] mb-2">Forgot password?</h1>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold ml-1 mb-2 text-[#424874]">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#424874] focus:ring-2 focus:ring-[#424874] transition-all duration-300"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
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
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#424874] mt-1 text-white text-lg font-semibold p-2 transition-colors duration-300 hover:bg-[#a6b1e1]"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>

            <p className="text-sm mt-3 text-gray-600 mx-auto">
              Remember your password? 
              <Link
                className="text-[#424874] hover:text-[#a6b1e1] hover:underline font-medium transition-colors duration-300 p-1"
                to="/login"
              >
                Login here
              </Link>
            </p>

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