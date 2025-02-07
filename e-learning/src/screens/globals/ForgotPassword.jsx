import { useState } from "react";
import login_bg from "../../assets/login_bg.jpg";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError("Please include a valid email address so we can get back to you");
      return;
    }
    setError("");
    alert("Password reset link has been sent to your email!");
    setEmail("");
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <img
        src={login_bg}
        alt="Background Image"
        className="absolute inset-0 w-full h-full object-cover filter blur-xs"
      />

      {/* Glass Effect Container (without white background) */}
      <div className="isolate aspect-video w-full max-w-md rounded-xl bg-white/20 backdrop-blur-lg shadow-lg ring-1 ring-black/5 relative z-10 p-7">
        <main className="w-full">
          <div className="transform transition-all duration-300 ">
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
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#424874] focus:ring-2 focus:ring-[#424874] transition-all duration-300"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      {error && (
                        <p className="text-xs text-red-600 mt-2" aria-live="assertive">
                          {error}
                        </p>
                      )}
                    </div>
                    <div className="w-full rounded-lg bg-[#424874] mt-1 text-white text-lg font-semibold">
                <button type="submit" className="w-full p-2 text-[#f4eeff]">Reset Password</button>
              </div>
                  </div>
                </form>
              </div>
              <p className="text-sm mt-3 text-gray-600 mx-auto ">
                Remember your password? 
                <a
                  className="text-[#424874] hover:text-[#a6b1e1] hover:underline font-medium transition-colors duration-300 p-1"
                  href="/login"
                >
                  Login here
                </a>
              </p>
            </div>
          </div>

          {/* Removed Github link, modified Contact Us */}
          <p className="mt-3 flex justify-center text-center divide-x divide-gray-300">
            <a className="pl-3 inline-flex items-center text-sm text-[#424874] hover:underline hover:text-[#a6b1e1] transition-colors duration-300" href="#">
              Contact us!
            </a>
          </p>
        </main>
      </div>
    </div>
  );
}
