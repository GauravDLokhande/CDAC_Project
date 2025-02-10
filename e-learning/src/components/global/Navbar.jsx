import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../assets/text_logo.png";
import LogoutButton from "./LogoutButton";

const Navbar = ({ user }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  // Close the dropdown if clicked outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown") && openDropdown) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, [openDropdown]);

  return (
    <header className="mx-[20px] mt-4 shadow-xl rounded-2xl w-[1480px] bg-[#424874]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <img src={Logo} alt="Logo" className="h-40 w-45 rounded-full" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12 z-10">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:border-b-2 hover:border-[#f4eeff] px-2 py-1"
                  >
                    Home
                  </Link>
                </li>

                {/* Student Links */}
                {user?.role === "user_student" && (
                  <li>
                    <Link
                      to="/mylearning"
                      className="text-white hover:border-b-2 hover:border-[#f4eeff] px-2 py-1"
                    >
                      My Learning
                    </Link>
                  </li>
                )}

                {/* Instructor Links */}
                {user?.role === "user_instructor" && (
                  <>
                    <li>
                      <Link
                        to="/instructor/courses"
                        className="text-white hover:border-b-2 hover:border-[#f4eeff] px-2 py-1"
                      >
                        Manage Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/instructor/students"
                        className="text-white hover:border-b-2 hover:border-[#f4eeff] px-2 py-1"
                      >
                        My Students
                      </Link>
                    </li>
                  </>
                )}

                {/* Common Profile/Logout Section */}
                {user ? (
                  <li className="relative dropdown">
                    <Link
                      className="flex items-center gap-2 text-white"
                      onClick={() => setOpenDropdown(!openDropdown)}
                    >
                      <img
                        src={user.profilePicture || "/path/to/default/profile.jpg"}
                        alt="Profile"
                        className="h-8 w-10 rounded-full cursor-pointer"
                      />
                      <span className="cursor-pointer hover:border-b-2 hover:border-[#f4eeff] px-2 py-1">
                        {user.name}
                      </span>
                    </Link>

                    {/* Dropdown Menu */}
                    {openDropdown && (
                      <div className="absolute left-0 mt-2 w-56 rounded-md bg-[#f4eeff] ring-1 shadow-lg ring-black/5">
                        <div className="py-1">
                          <Link
                            to="/editProfile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#a6b1e1] hover:text-[#424874]"
                          >
                            Edit Profile
                          </Link>
                        </div>
                        <div className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:text-[#ff4545] hover:bg-[#a6b1e1]">
                          <LogoutButton />
                        </div>
                      </div>
                    )}
                  </li>
                ) : (
                  // Guest User Login & Register Links
                  <li className="flex gap-4">
                    <Link
                      to="/login"
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#424874] hover:bg-[#424874] hover:text-white"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="hover:border-white rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#424874] hover:bg-[#424874] hover:text-white"
                    >
                      Register
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
