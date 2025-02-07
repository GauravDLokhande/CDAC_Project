import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import VideoPanel from "../components/VideoPanel";
import CourseOverview from "../components/CourseOverview";
import Sidebar from "../components/Sidebar";

const MyCourse = () => {
  const { courseId } = useParams(); // Extract courseId from the URL
  const [lessonId, setLessonId] = useState(1); // Default lessonId is 1
  const [showSidebar, setShowSidebar] = useState(false); // Sidebar visibility state

  return (
    <div className="p-1 overflow-x-hidden">
      <Navbar />
      <div className="flex h-screen w-screen bg-gray-100 relative overflow-x-hidden">
        {/* Left Side: Video and Course Overview */}
        <div className="flex-1 p-4">
          <VideoPanel lessonId={lessonId} />
          <CourseOverview lessonId={lessonId} />
        </div>

        {/* Right Side: Sidebar */}
        <Sidebar
          courseId={courseId}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          setLessonId={setLessonId} // Pass setLessonId to update selected lesson
        />

        {/* Toggle Button for Sidebar */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-[#424874] text-[#Dcd6f7] px-2 py-4 rounded-l-lg shadow-md hover:bg-[#424874] transition"
        >
          {showSidebar ? "▷" : "◁"}
        </button>
      </div>
    </div>
  );
};

export default MyCourse;
