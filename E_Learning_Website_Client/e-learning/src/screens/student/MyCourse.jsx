import React, { useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import VideoPanel from './../../components/students/VideoPanel';
import CourseOverview from './../../components/students/CourseOverview';
import Navbar from './../../components/global/Navbar';
import Sidebar from './../../components/students/Sidebar';

const MyCourse = () => {
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility

  const mockUser = {
    name: "John Doe",
    role: "user_student", // Change this role to test different navbar links
    profilePicture: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };


  const modules = [
    { id: 1, title: "Module 1: Introduction", lessons: [{ id: 1, title: "Introduction To Web Design", duration: "4min" }] },
    { id: 2, title: "Module 2: Colors & Images", lessons: [{ id: 2, title: "Using Colors Like A Pro", duration: "7min" }] },
  ];

  return (
    <div className="p-1 overflow-x-hidden">
            <Navbar user={mockUser} />

      <div className="flex h-screen w-screen bg-gray-100 relative overflow-x-hidden">
        {/* Left Side: Video and Course Overview */}
        <div
          className={`flex-1 p-4 transition-all duration-300 ${
            showSidebar ? "w-3/4" : "w-full"
          }`} // Adjust width based on showSidebar state
        >
          <VideoPanel />
          <CourseOverview />
        </div>

        {/* Right Side: Sidebar */}
        <Sidebar modules={modules} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        
        {/* Toggle Button for Sidebar */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-[#424874] text-[#Dcd6f7] p-4 rounded-l-lg shadow-md hover:bg-[#424874] transition"
        >
          {showSidebar ? (
            <FiArrowRightCircle size={24} />
          ) : (
            <FiArrowLeftCircle size={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default MyCourse;
