import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import {
  MdDashboard,
  MdPeople,
  MdSchool,
  MdLibraryBooks,
  MdExitToApp,
  MdEdit,
  MdShowChart,
  MdBarChart,
  MdClose,
} from "react-icons/md";
import LogoutButton from "../global/LogoutButton";

const Sidebar = () => {
  const [user, setUser] = useState({});
  const [collapsed, setCollapsed] = useState(() => {
    return JSON.parse(localStorage.getItem("sidebarCollapsed")) || false;
  });

  useEffect(() => {
    const fetchUserFromLocalStorage = () => {
      const userString = localStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        setUser({
          name: `${user.firstName} ${user.lastName}`,
          profilePicture: user.profilePic || "",
        });
      } else {
        setUser(null);
      }
    };

    fetchUserFromLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", JSON.stringify(collapsed));
  }, [collapsed]);

  return (
    <div
      className={`transition-all duration-300 fixed top-0 left-0 h-screen bg-[#424874] text-[#f4eeff] z-10 ${
        collapsed ? "w-20" : "w-64 rounded-r-2xl"
      }`}
    >
      <div className={`flex p-4 ${collapsed ? "justify-center" : "justify-start"}`}>
        {collapsed ? (
          <FiMenu
            className="text-2xl cursor-pointer text-white hover:text-[#a6b1e1] transition-colors"
            onClick={() => setCollapsed(!collapsed)}
          />
        ) : (
          <MdClose
            className="text-2xl cursor-pointer text-white hover:text-[#a6b1e1] transition-colors"
            onClick={() => setCollapsed(!collapsed)}
          />
        )}
      </div>
      <div className="flex flex-col items-center ">
        <img
          src={user?.profilePicture || "/path/to/default/profile.jpg"}
          alt="Profile"
          className="h-20 w-20 rounded-full border-2 border-[#a6b1e1] transition-all duration-300 transform hover:scale-110" // Further increased size
        />
        {!collapsed && <p className="mt-2 text-white text-md font-semibold">{user?.name}</p>}
      </div>
      <div className="mt-6">
        <SidebarItem icon={<MdDashboard />} label="Dashboard" to="/dashboard" collapsed={collapsed} />
        <SidebarItem icon={<MdPeople />} label="Manage Students" to="/manage-students" collapsed={collapsed} />
        <SidebarItem icon={<MdSchool />} label="Manage Instructors" to="/manage-instructors" collapsed={collapsed} />
        <SidebarItem icon={<MdLibraryBooks />} label="Manage Courses" to="/manage-courses" collapsed={collapsed} />
        <div className="mt-6 border-t border-[#a6b1e1] pt-4">
          <SidebarItem icon={<MdShowChart />} label="Line Chart" to="/charts/line" collapsed={collapsed} />
          <SidebarItem icon={<MdBarChart />} label="Bar Chart" to="/charts/bar" collapsed={collapsed} />
        </div>
        <div className="mt-6 space-y-4 border-t border-[#a6b1e1] pt-4">
          <SidebarItem icon={<MdEdit />} label="Edit Profile" to="/editProfile" collapsed={collapsed} />
          <SidebarItem icon={<MdExitToApp />} label={<LogoutButton />} collapsed={collapsed} />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, to, collapsed }) => {
  return (
    <Link
      to={to}
      className={`flex items-center p-3 hover:bg-[#3a3e6b] rounded-lg cursor-pointer transition-all duration-300 ${
        collapsed ? "justify-center" : "justify-start"
      }`}
    >
      <div className="mr-3 text-lg">{icon}</div>
      {!collapsed && <span className="text-[#f4eeff] hover:text-[#a6b1e1] text-md font-semibold transition-colors">{label}</span>}
    </Link>
  );
};

export default Sidebar;
