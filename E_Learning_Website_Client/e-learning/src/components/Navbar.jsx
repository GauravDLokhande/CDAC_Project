import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const closeDropdown = (e) => {
            if (!e.target.closest(".dropdown")) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("click", closeDropdown);
        return () => document.removeEventListener("click", closeDropdown);
    }, []);

    return (
        <header className=" mx-[20px] mt-4  rounded-2xl w-[1480px] bg-[#424874]">
            <div className=" px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">


                        <a className="block text-teal-600" href="#">
                            <span className="sr-only cursor-pointer text-white">Home</span>
                            <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* SVG Path */}
                            </svg>
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12 z-10">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li className="relative">
                                    <a className="text-white cursor-pointer transition hover:#f4eeff" href="/">Home</a>
                                </li>

                                {/* Courses Dropdown */}
                                <li className="relative dropdown">
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === "courses" ? null : "courses")}
                                        className="text-white cursor-pointer transition hover:[#f4eeff]"
                                    >
                                        Courses
                                    </button>
                                    {openDropdown === "courses" && (
                                        <div className="absolute left-0 mt-2 w-56 rounded-md bg-white ring-1 shadow-lg ring-black/5">
                                            <div className="py-1">
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700">Software Development</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700">Data Science</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700">UI/UX Design</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700">Cloud Computing</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700">Cyber Security</a>
                                            </div>
                                        </div>
                                    )}
                                </li>

                                <li className="relative">
                                    <a className="text-white cursor-pointer transition hover:#f4eeff" href="/mylearning">My Learning</a>
                                </li>

                                {/* Profile Dropdown */}
                                <li className="relative dropdown">
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === "profile" ? null : "profile")}
                                        className="text-white transition hover:#f4eeff"
                                    >
                                        Profile
                                    </button>
                                    {openDropdown === "profile" && (
                                        <div className="absolute left-0 mt-2 w-56 rounded-md bg-white ring-1 shadow-lg ring-black/5">
                                            <div className="py-1">
                                                <a href="/editProfile" className="block px-4 py-2 text-sm text-gray-700">Edit Profile</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700">Help and Support</a>
                                                <form method="POST" action="#">
                                                    <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700">Logout</button>
                                                </form>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <Link to="/login" className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#424874]">
                                    Login
                                </Link>

                                <div className="hidden sm:flex">
                                    <Link to="/register" className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#424874]">
                                        Register
                                    </Link>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {/* SVG Path */}
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
