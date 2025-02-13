import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdDashboard, MdPeople, MdSchool, MdLibraryBooks, MdExitToApp, MdEdit, MdShowChart, MdBarChart, MdClose } from "react-icons/md";
import LogoutButton from "../global/LogoutButton";

const Sidebar = ({ user }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`transition-all duration-300 fixed top-0 left-0 h-screen bg-[#424874] text-[#f4eeff] z-10 ${
        collapsed ? "w-16" : "w-56"
      } `}
    >
      <div className={`flex p-2 my-5 ${collapsed ? "justify-center" : "justify-start"}`}>
        {/* Hamburger or Cross Icon */}
        {collapsed ? (
          <FiMenu
            className="text-xl cursor-pointer  text-white hover:text-[#a6b1e1] transition-colors"
            onClick={() => setCollapsed(!collapsed)}
          />
        ) : (
          <MdClose
            className="text-xl cursor-pointer text-white hover:text-[#a6b1e1] transition-colors"
            onClick={() => setCollapsed(!collapsed)}
          />
        )}
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center ">
        <img
          src={user.profilePicture || "/path/to/default/profile.jpg"}
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-[#a6b1e1] transition-all duration-300 transform hover:scale-110"
        />
        {!collapsed && <p className="mt-2 text-white text-sm font-semibold">{user.name}</p>}
      </div>

      {/* Sidebar Links */}
      <div className="mt-4">
        <SidebarItem  icon={<MdDashboard />} label="Dashboard" to="/dashboard" collapsed={collapsed} />
        <SidebarItem icon={<MdPeople />} label="Manage Students" to="/manage-students" collapsed={collapsed} />
        <SidebarItem icon={<MdSchool />} label="Manage Instructors" to="/manage-instructors" collapsed={collapsed} />
        <SidebarItem icon={<MdLibraryBooks />} label="Manage Courses" to="/manage-courses" collapsed={collapsed} />

        {/* Charts Section */}
        <div className="mt-4 border-t border-[#a6b1e1] pt-2">
          <SidebarItem icon={<MdShowChart />} label="Line Chart" to="/charts/line" collapsed={collapsed} />
          <SidebarItem icon={<MdBarChart />} label="Bar Chart" to="/charts/bar" collapsed={collapsed} />
        </div>

        {/* Profile and Logout Section */}
        <div className="mt-4 space-y-2 border-t border-[#a6b1e1] pt-2">
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
      className={`flex items-center p-2 hover:bg-[#3a3e6b] rounded-lg cursor-pointer transition-all duration-300 ${
        collapsed ? "justify-center" : "justify-start"
      }`}
    >
      <div className="mr-2 text-lg">{icon}</div>
      {!collapsed && (
        <span className="text-[#f4eeff] hover:text-[#a6b1e1] text-sm font-medium transition-colors">
          {label}
        </span>
      )}
    </Link>
  );
};

export default Sidebar;
