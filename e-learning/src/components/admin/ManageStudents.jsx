import { useState } from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import Modal from "react-modal";
import { toast } from "react-hot-toast"; // Import toast for notifications

// Sample data
const sampleStudents = [
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
];

Modal.setAppElement("#root");

const ManageStudents = ({ students = sampleStudents }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setStudentToDelete(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    // Proceed with the delete logic
    console.log(`Deleting student with ID: ${studentToDelete}`);

    // Show a loading toast during the deletion process
    const deletingToast = toast.loading("Deleting student...");

    // Simulate delete action (replace with actual delete logic)
    setTimeout(() => {
      toast.success("Student deleted successfully!", {
        id: deletingToast, // Replace the loading toast with success
        position: "top-right",
        duration: 3000,
      });

      setIsModalOpen(false);
      setStudentToDelete(null);
    }, 1000); // Simulating delay (1 second) for delete operation
  };

  const handleUpdate = (id) => {
    navigate(`/admin/update-student/${id}`);
  };

  return (
    <Card className="mt-5 ">
      <CardHeader color="blue-gray" className="p-4 bg-[#2a2e4e]">
        <Typography variant="h5" color="white">
          Students Table
        </Typography>
      </CardHeader>
      <CardBody>
        <table className="min-w-full bg-white border border-[#a6b1e1] shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-[#2a2e4e] text-[#f4eeff]">
            <tr>
              <th className="px-6 py-4 text-left">User ID</th>
              <th className="px-6 py-4 text-left">Username</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Contact Info</th>
              <th className="px-6 py-4 text-left">Created At</th>
              <th className="px-6 py-4 text-left">Updated At</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-[#424874]">
            {students.map((student, index) => (
              <tr
                key={student.id}
                className={`border-t ${index % 2 === 0 ? "bg-[#f4eeff]" : "bg-[#Dcd6f7]"}`}
              >
                <td className="px-6 py-4">{student.id}</td>
                <td className="px-6 py-4">{student.username}</td>
                <td className="px-6 py-4">{student.email}</td>
                <td className="px-6 py-4">{student.contactInfo}</td>
                <td className="px-6 py-4">{student.createdAt}</td>
                <td className="px-6 py-4">{student.updatedAt}</td>
                <td className="px-6 py-4 flex justify-center gap-10">
                  <Tooltip content="Update Student">
                    <IconButton
                      onClick={() => handleUpdate(student.id)}
                      color="blue"
                      className="hover:bg-blue-600"
                    >
                      <PencilIcon className="h-5 w-5 text-white" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip content="Delete Student">
                    <IconButton
                      onClick={() => handleDelete(student.id)}
                      color="red"
                      className="hover:bg-red-600"
                    >
                      <TrashIcon className="h-5 w-5 text-white" />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for Delete Confirmation */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Confirm Delete"
          className="bg-white p-6 rounded-md shadow-lg max-w-sm mx-auto"
          overlayClassName="fixed inset-0 backdrop-blur bg-opacity-20 flex justify-center items-center"
        >
          <h3 className="text-xl font-bold text-center mb-4">Are you sure you want to delete this student?</h3>
          <div className="flex justify-around">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Confirm
            </button>
          </div>
        </Modal>
      </CardBody>
    </Card>
  );
};

export default ManageStudents;