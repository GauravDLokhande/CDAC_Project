import { useState, useEffect } from "react";
import Sidebar from "../../components/admin/Sidebar";
import ManageCourses from "../../components/admin/ManageCourses"; 
import adminCourseService from "../../services/adminservices/adminCourseService"; 
import adminService from "../../services/adminservices/adminService"; 
import { toast } from "react-hot-toast";

const CourseManagement = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await adminCourseService.getCourses();
        console.log("Fetched Courses:", data);
        setCourses(data || []); // Ensure an empty array in case of null/undefined
      } catch (err) {
        console.error("Failed to fetch courses:", err);
        toast.error("Failed to load courses. Please try again.");
        setError("Failed to load courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleDeleteCourse = async (courseId) => {
    try {
      await adminService.deleteUser(courseId);
      toast.success("Course deleted successfully!");
      setCourses(courses.filter(course => course.courseId !== courseId));
    } catch (error) {
      toast.error("Failed to delete course.");
      console.error("Failed to delete course:", error);
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.courseName?.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <Sidebar user={{ name: "Admin", profilePicture: "" }} setCollapsed={setCollapsed} />

      <div className={`flex-1 p-8 bg-white min-h-screen overflow-y-auto transition-all duration-300 ${collapsed ? "ml-16" : "ml-[250px]"}`}>
        <h2 className="text-3xl font-bold text-[#424874] mb-8">Manage Courses</h2>

        <div className="mb-8 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search by Course Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="p-2 border border-[#a6b1e1] rounded-md w-64"
          />
        </div>

        {loading && <p className="text-lg text-gray-600">Loading courses...</p>}
        {error && <p className="text-lg text-red-600">{error}</p>}

        {!loading && !error && <ManageCourses courses={filteredCourses} onDelete={handleDeleteCourse} />}
      </div>
    </div>
  );
};

export default CourseManagement;
