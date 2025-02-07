import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import login_bg from "../assets/login_bg.jpg";

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
            <h2 className="mt-10 mb-7 text-center text-2xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="w-full rounded-lg bg-[#424874] mt-4 p-2 text-white text-lg font-semibold">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
