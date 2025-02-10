import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar"; 
import ManageInstructors from "../../components/admin/ManageInstructors"; // Instructor management component

const InstructorManagement = () => {
  // Sample instructors data for pagination and searching
  const [instructors, setInstructors] = useState([
    {
      id: 1,
      name: "Dr. John Doe",
      email: "john.doe@example.com",
      contactInfo: "1234567890",
      createdAt: "2025-01-01",
      updatedAt: "2025-02-01",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      email: "jane.smith@example.com",
      contactInfo: "9876543210",
      createdAt: "2025-02-01",
      updatedAt: "2025-02-06",
    },
    {
      id: 3,
      name: "Dr. Sam Jones",
      email: "sam.jones@example.com",
      contactInfo: "5555555555",
      createdAt: "2025-01-15",
      updatedAt: "2025-02-05",
    },
    // Add more instructors here
  ]);

  const [searchName, setSearchName] = useState(""); // State for searching by instructor name
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const instructorsPerPage = 5; // Number of instructors to display per page

  // Filter instructors based on searchName
  const filteredInstructors = instructors.filter((instructor) =>
    instructor.name.toLowerCase().includes(searchName.toLowerCase())
  );

  // Get the current page instructors
  const indexOfLastInstructor = currentPage * instructorsPerPage;
  const indexOfFirstInstructor = indexOfLastInstructor - instructorsPerPage;
  const currentInstructors = filteredInstructors.slice(
    indexOfFirstInstructor,
    indexOfLastInstructor
  );

  // Change page
  const nextPage = () => {
    if (currentPage * instructorsPerPage < filteredInstructors.length) {
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
        <h2 className="text-3xl font-bold text-[#424874] mb-8">Instructor Management</h2> {/* Increased margin-bottom */}

        {/* Search Bar */}
        <div className="mb-8 flex items-center space-x-4"> {/* Increased margin-bottom */}
          <input
            type="text"
            placeholder="Search by Instructor Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="p-2 border border-[#a6b1e1] rounded-md w-64"
          />
        </div>

        {/* Manage Instructors Table with Pagination */}
        <ManageInstructors instructors={currentInstructors} />

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
            Page {currentPage} of {Math.ceil(filteredInstructors.length / instructorsPerPage)}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage * instructorsPerPage >= filteredInstructors.length}
            className="px-4 py-2 bg-[#424874] text-white rounded-lg disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorManagement;
