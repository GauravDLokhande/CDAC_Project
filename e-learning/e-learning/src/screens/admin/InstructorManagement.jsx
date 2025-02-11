import { useState, useEffect } from "react";
import Sidebar from "../../components/admin/Sidebar";
import ManageInstructors from "../../components/admin/ManageInstructors";
import adminInstructorService from "../../services/adminservices/adminInstructorService";
import adminService from "../../services/adminservices/adminService";
import { toast } from "react-hot-toast";

const InstructorManagement = () => {
  const [instructors, setInstructors] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const instructorsPerPage = 5;
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const data = await adminInstructorService.getInstructors();
        console.log("Fetched instructors:", data);
        const processedData = data
          .filter(instructor => !instructor.deleted) // Exclude soft-deleted instructors
          .map((instructor) => ({
            id: instructor.userId || "N/A",
            name: instructor.username || "Unknown Instructor",
            email: instructor.email || "No email provided",
            contactInfo: instructor.contactInfo || "No contact info",
            createdAt: instructor.createdOn
              ? new Date(instructor.createdOn).toLocaleDateString()
              : "N/A",
            updatedAt: instructor.updatedOn
              ? new Date(instructor.updatedOn).toLocaleDateString()
              : "N/A",
          }));
        setInstructors(processedData);
      } catch (err) {
        console.error("Error fetching instructors:", err);
        setError("Failed to load instructors. Please try again later.");
      }
    };

    fetchInstructors();
  }, []);

  const handleDeleteInstructor = async (userId) => {
    try {
      await adminService.deleteUser(userId);
      toast.success("Instructor deleted successfully!");
      setInstructors(instructors.filter(instructor => instructor.id !== userId));
    } catch (error) {
      toast.error("Failed to delete instructor.");
      console.error("Failed to delete instructor:", error);
    }
  };

  const filteredInstructors = instructors.filter((instructor) =>
    instructor.name.toLowerCase().includes(searchName.toLowerCase())
  );

  console.log("Filtered Instructors:", filteredInstructors);

  const indexOfLastInstructor = currentPage * instructorsPerPage;
  const indexOfFirstInstructor = indexOfLastInstructor - instructorsPerPage;
  const currentInstructors = filteredInstructors.slice(
    indexOfFirstInstructor,
    indexOfLastInstructor
  );

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
      <Sidebar />
      <div className="flex-1 p-8 bg-white min-h-screen overflow-y-auto ml-[250px]">
        <h2 className="text-3xl font-bold text-[#424874] mb-8">Instructor Management</h2>
        {error && (
          <div className="mb-8 text-red-500 text-lg">
            {error}
          </div>
        )}
        <div className="mb-8 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search by Instructor Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="p-2 border border-[#a6b1e1] rounded-md w-64"
          />
        </div>
        <ManageInstructors instructors={currentInstructors} onDelete={handleDeleteInstructor} />
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
