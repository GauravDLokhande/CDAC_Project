import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar"; 
import ManageStudents from "../../components/admin/ManageStudents";

const StudentManagement = () => {
  // Sample students data for pagination and searching
  const [students, setStudents] = useState([
    {
      id: 1,
      username: "john_doe",
      email: "john@example.com",
      contactInfo: "1234567890",
      createdAt: "2025-01-01",
      updatedAt: "2025-02-01",
    },
    {
      id: 2,
      username: "jane_smith",
      email: "jane@example.com",
      contactInfo: "9876543210",
      createdAt: "2025-02-01",
      updatedAt: "2025-02-06",
    },
    {
      id: 3,
      username: "sam_jones",
      email: "sam@example.com",
      contactInfo: "5555555555",
      createdAt: "2025-01-15",
      updatedAt: "2025-02-05",
    },
    {
      id: 4,
      username: "alice_brown",
      email: "alice@example.com",
      contactInfo: "2222222222",
      createdAt: "2025-01-10",
      updatedAt: "2025-02-03",
    },
    {
      id: 5,
      username: "bob_white",
      email: "bob@example.com",
      contactInfo: "4444444444",
      createdAt: "2025-02-01",
      updatedAt: "2025-02-04",
    },
    {
      id: 6,
      username: "carol_blue",
      email: "carol@example.com",
      contactInfo: "6666666666",
      createdAt: "2025-01-20",
      updatedAt: "2025-02-02",
    },
  ]);

  const [searchName, setSearchName] = useState(""); // State for searching by student name
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const studentsPerPage = 5; // Number of students to display per page

  // Filter students based on searchName
  const filteredStudents = students.filter((student) =>
    student.username.toLowerCase().includes(searchName.toLowerCase())
  );

  // Get the current page students
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  // Change page
  const nextPage = () => {
    if (currentPage * studentsPerPage < filteredStudents.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar user={{ name: "Admin", profilePicture: "" }} />

      {/* Content Area */}
      <div className="flex-1 p-8 bg-white min-h-screen overflow-y-auto ml-[250px]">
        <h2 className="text-3xl font-bold text-[#424874] mb-8">Student Management</h2> {/* Increased margin-bottom */}

        {/* Search Bar */}
        <div className="mb-8 flex items-center space-x-4"> {/* Increased margin-bottom */}
          <input
            type="text"
            placeholder="Search by Student Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="p-2 border border-[#a6b1e1] rounded-md w-64"
          />
        </div>

        {/* Manage Students Table with Pagination */}
        <ManageStudents students={currentStudents} />

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#424874] text-white rounded-lg disabled:bg-gray-400"
          >
            Previous
          </button>
          <span className="text-lg text-[#424874]">
            Page {currentPage} of {Math.ceil(filteredStudents.length / studentsPerPage)}
          </span>
          <button
            onClick={nextPage}
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
