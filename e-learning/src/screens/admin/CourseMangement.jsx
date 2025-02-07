import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import ManageCourses from "../../components/admin/ManageCourses"; // ManageCourses component
import { Link } from "react-router-dom"; // If you're using react-router for navigation

const CourseManagement = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [courses, setCourses] = useState([
    { id: 1, name: "Math 101", instructor: "John Doe", duration: "3 months", createdAt: "2025-01-01", updatedAt: "2025-02-01" },
    { id: 2, name: "Science 101", instructor: "Jane Smith", duration: "4 months", createdAt: "2025-02-01", updatedAt: "2025-02-06" },
    { id: 3, name: "History 101", instructor: "Sam Jones", duration: "2 months", createdAt: "2025-01-15", updatedAt: "2025-02-05" },
    // Add more courses here
  ]);
  
  const [searchName, setSearchName] = useState(""); // State for searching by course name
  
  // Filter courses based on searchName
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <Sidebar user={{ name: "Admin", profilePicture: "" }} setCollapsed={setCollapsed} />

      <div className={`flex-1 p-8 bg-white min-h-screen overflow-y-auto transition-all duration-300 ${collapsed ? "ml-16" : "ml-[250px]"}`}>
        <h2 className="text-3xl font-bold text-[#424874] mb-8">Manage Courses</h2>

        {/* Search Bar */}
        <div className="mb-8 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search by Course Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="p-2 border border-[#a6b1e1] rounded-md w-64"
          />
        </div>

        {/* Manage Courses Table with Filtered Data */}
        <ManageCourses courses={filteredCourses} />
      </div>
    </div>
  );
};

export default CourseManagement;
