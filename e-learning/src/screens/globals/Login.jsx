import login_bg from "../../assets/login_bg.jpg";
import Logo from "../../assets/logo_text_dark.png";


const Login = () => {
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
            <img
              src={Logo}
              alt="Company Logo"
              className="mx-auto h-30 w-auto"
            />

            <h2 className="mt-10 mb-7 text-center text-2xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="/forgot"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="w-full rounded-lg bg-[#424874] mt-4 text-white text-lg font-semibold">
                <button type="submit" className="w-full p-2 text-[ #f4eeff]">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
