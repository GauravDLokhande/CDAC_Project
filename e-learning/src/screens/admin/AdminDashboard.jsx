import React, { useState, useEffect } from "react";
import StatsCard from "../../components/admin/StatsCard";
import { MdBook, MdLibraryBooks, MdPeople, MdSchool, MdVideoLibrary } from "react-icons/md";
import Sidebar from "./../../components/admin/Sidebar";
import SplitText from '../../components/instructor/SplitText';

const AdminDashboard = () => {
  const stats = [
    { title: "Total Courses", value: 120, icon: <MdLibraryBooks /> },
    { title: "Total Modules", value: 450, icon: <MdBook /> },
    { title: "Total Instructors", value: 25, icon: <MdSchool /> },
    { title: "Total Students", value: 2000, icon: <MdPeople /> },
    { title: "Total Lessons", value: 1800, icon: <MdVideoLibrary /> },
  ];

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserFromLocalStorage = () => {
      const userString = localStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        setUser({
          name: `${user.firstName} ${user.lastName}`,
          role: user.role || "",
        });
      } else {
        setUser(null);
      }
    };

    fetchUserFromLocalStorage();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div className="flex-1 p-8 bg-white min-h-screen overflow-y-auto ml-[250px]">
        {/* Welcome Text */}
        <div className="mb-8 text-center ">
          <SplitText
            text={`Welcome, Admin ${user?.name || 'User'}!`}
            className="text-[#424874] text-4xl sm:text-5xl md:text-6xl font-semibold text-center"
            delay={150}
            animationFrom={{
              opacity: 0,
              transform: "translate3d(0,50px,0)",
            }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
