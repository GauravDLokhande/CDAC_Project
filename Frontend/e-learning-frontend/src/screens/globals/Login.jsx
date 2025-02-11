import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import login_bg from "../../assets/login_bg.jpg";
import Logo from "../../assets/logo_text_dark.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const success = await login(email, password);
    if (success) {
      localStorage.setItem("loginSuccess", "true"); // Set the flag
      navigate("/"); // Redirect to Home screen
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <img
        src={login_bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />

      {/* Login Form */}
      <div className="relative z-10 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white/30 backdrop-blur-3xl rounded-lg p-8 shadow-2xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img src={Logo} alt="Company Logo" className="mx-auto h-24 w-auto" />
            <h2 className="mt-6 mb-6 text-center text-2xl font-bold text-gray-900">
              Sign in to your account
            </h2>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <a href="/forgot" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 rounded-lg bg-[#424874] text-[#f4eeff] text-lg font-semibold hover:bg-[#3a3f6c] transition"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
