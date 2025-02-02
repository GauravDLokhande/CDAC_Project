
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import VideoPanel from "../components/VideoPanel";
import CourseOverview from "../components/CourseOverview";
import Sidebar from "../components/Sidebar";

const CourseHero = () => {
  const [showSidebar, setShowSidebar] = useState(false);  // State for sidebar visibility

  const modules = [
    { id: 1, title: "Module 1: Introduction", lessons: [{ id: 1, title: "Introduction To Web Design", duration: "4min" }] },
    { id: 2, title: "Module 2: Colors & Images", lessons: [{ id: 2, title: "Using Colors Like A Pro", duration: "7min" }] },
  ];

  return (
    <div className="p-1 overflow-x-hidden">
      <Navbar />
      <div className="flex h-screen w-screen bg-gray-100 relative overflow-x-hidden">
        {/* Left Side: Video and Course Overview */}
        <div className="flex-1 p-4">
          <VideoPanel />
          <CourseOverview />
        </div>

        {/* Right Side: Sidebar */}
        <Sidebar modules={modules} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        
        {/* Toggle Button for Sidebar */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-[#424874] text-[#Dcd6f7] px-2 py-4 rounded-l-lg shadow-md hover:bg-[#424874] transition"
        >
          {showSidebar ? "▶" : "◀"}
        </button>
      </div>
    </div>
  );
};

export default CourseHero;
