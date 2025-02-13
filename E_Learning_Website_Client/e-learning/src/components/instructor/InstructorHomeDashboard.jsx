import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { MdAnnouncement } from "react-icons/md";

const RecentCourseContent = () => {
  const recentLessons = [
    { id: 1, title: "React Hooks Deep Dive", course: "React Basics", videoUrl: "https://via.placeholder.com/300" },
    { id: 2, title: "Understanding Async/Await", course: "JavaScript Mastery", videoUrl: "https://via.placeholder.com/300" },
    { id: 3, title: "CSS Grid & Flexbox", course: "Advanced CSS", videoUrl: "https://via.placeholder.com/300" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-semibold flex items-center gap-3 text-gray-800 mb-5">
        <FaPlayCircle className="text-blue-600 text-2xl" /> Recent Lessons
      </h2>
      <div className="space-y-4">
        {recentLessons.map((lesson) => (
          <div key={lesson.id} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <img src={lesson.videoUrl} alt={lesson.title} className="w-24 h-16 rounded-md object-cover" />
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">{lesson.title}</h3>
              <p className="text-sm text-gray-600">Course: <span className="text-blue-500 font-medium">{lesson.course}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const InstructorAnnouncements = () => {
  const announcements = [
    { id: 1, message: "Upcoming platform maintenance on Feb 10, 2025." },
    { id: 2, message: "New feature: Track student progress in real-time!" },
    { id: 3, message: "Reminder: Course submission deadline is approaching." },
  ];

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-semibold flex items-center gap-3 text-gray-800 mb-5">
        <MdAnnouncement className="text-red-500 text-2xl" /> Announcements
      </h2>
      <ul className="space-y-3">
        {announcements.map((announcement) => (
          <li key={announcement.id} className="p-4 bg-gray-50 rounded-xl shadow-sm text-gray-800 hover:bg-gray-100 transition">
            {announcement.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

const InstructorHomeDashboard = () => {
  return (
    <div className="p-8 mt-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Instructor Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <RecentCourseContent />
        <InstructorAnnouncements />
      </div>
    </div>
  );
};

export default InstructorHomeDashboard;
