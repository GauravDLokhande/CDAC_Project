import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import ManageStudents from "../../components/admin/ManageStudents";
import studentService from "../../services/adminservices/studentService";
import adminService from "../../services/adminservices/adminService";
import { toast } from "react-hot-toast";

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const studentsPerPage = 5;

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const data = await studentService.getStudents();
      setStudents(
        data
          .filter(student => !student.deleted) // Exclude soft-deleted students
          .map((student) => ({
            id: student.userId,
            username: student.username || "N/A",
            email: student.email,
            contactInfo: student.contactInfo || "N/A",
            createdAt: student.createdOn || "N/A",
            updatedAt: student.updatedOn || "N/A",
          }))
      );
    } catch (err) {
      setError("Failed to load students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDeleteStudent = async (userId) => {
    try {
      await adminService.deleteUser(userId);
      toast.success("Student deleted successfully!");
      fetchStudents(); // Re-fetch updated student list
    } catch (error) {
      toast.error("Failed to delete student.");
      console.error("Failed to delete student:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  const filteredStudents = students.filter((student) =>
    student.username.toLowerCase().includes(searchName.toLowerCase())
  );

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  return (
    <div className="flex h-screen">
      <Sidebar user={{ name: "Admin", profilePicture: "" }} />
      <div className="flex-1 p-8 bg-white min-h-screen overflow-y-auto ml-[250px] rounded-tr-lg"> {/* Add corner radius */}
        <h2 className="text-3xl font-bold text-[#424874] mb-8">Student Management</h2>

        {/* Search Bar */}
        <div className="mb-8 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search by Student Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="p-2 border border-[#a6b1e1] rounded-md w-64"
          />
        </div>

        {/* Manage Students Table with Pagination */}
        <ManageStudents students={currentStudents} onDelete={handleDeleteStudent} />

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#424874] text-white rounded-lg disabled:bg-gray-400"
          >
            Previous
          </button>
          <span className="text-lg text-[#424874]">
            Page {currentPage} of {Math.ceil(filteredStudents.length / studentsPerPage)}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage * studentsPerPage >= filteredStudents.length}
            className="px-4 py-2 bg-[#424874] text-white rounded-lg disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;
