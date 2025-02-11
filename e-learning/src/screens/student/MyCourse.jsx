import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import Navbar from "../../components/global/Navbar";
import VideoPanel from "../../components/students/VideoPanel";
import CourseOverview from "../../components/students/CourseOverview";
import Sidebar from "../../components/students/Sidebar";

const MyCourse = () => {
  const { courseId } = useParams(); // Extract courseId from the URL
  const [lessonId, setLessonId] = useState(1); // Default lessonId is 1
  const [showSidebar, setShowSidebar] = useState(false); // Sidebar visibility state
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserFromLocalStorage = () => {
      const userString = localStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        setUser({
          name: `${user.firstName} ${user.lastName}`,
          role: user.role,
          profilePicture: user.profilePic || "",
          designation: user.designation,
          bio: user.bio,
          email: user.email,
        });
      } else {
        setUser(null);
      }
    };

    fetchUserFromLocalStorage();
  }, []);

  return (
    <div className="p-1 overflow-x-hidden">
      <Navbar user={user} />
      <div className="flex h-screen w-screen bg-gray-100 relative overflow-x-hidden">
        {/* Left Side: Video and Course Overview */}
        <div
          className={`flex-1 p-4 transition-all duration-300 ${
            showSidebar ? "w-3/4" : "w-full"
          }`} // Adjust width based on showSidebar state
        >
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
