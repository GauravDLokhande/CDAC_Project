import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
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
import { Link } from "react-router-dom";  // Import Link for navigation

// Sample data
const sampleInstructors = [
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
];

Modal.setAppElement("#root");

const ManageInstructors = ({ instructors = sampleInstructors }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [instructorToDelete, setInstructorToDelete] = useState(null);

  const handleDelete = (id) => {
    setInstructorToDelete(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    // Proceed with the delete logic
    console.log(`Deleting instructor with ID: ${instructorToDelete}`);

    // Show a loading toast during the deletion process
    const deletingToast = toast.loading("Deleting instructor...");

    // Simulate delete action (replace with actual delete logic)
    setTimeout(() => {
      toast.success("Instructor deleted successfully!", {
        id: deletingToast,  // Replace the loading toast with success
        position: "top-right",
        duration: 3000,
      });

      setIsModalOpen(false);
      setInstructorToDelete(null);
    }, 1000);  // Simulating delay (1 second) for delete operation
  };

  return (
    <Card className="mt-5">
      <CardHeader color="blue-gray" className="p-4 bg-[#2a2e4e]">
        <Typography variant="h5" color="white">
          Instructors Table
        </Typography>
      </CardHeader>
      <CardBody>
        <div className="mb-4 text-right">
          {/* Add Instructor Button */}
          <Link to="/admin/create-instructor">
            <button className="px-4 py-2 bg-[#a6b1e1] hover:cursor-pointer hover:bg-[#2a2e4e] text-[#2a2e4e] rounded-md hover:text-[#f4eeff] ">
              Add New Instructor
            </button>
          </Link>
        </div>
        <table className="min-w-full bg-white border border-[#a6b1e1] shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-[#2a2e4e] text-[#f4eeff]">
            <tr>
              <th className="px-6 py-4 text-left">Instructor ID</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Contact Info</th>
              <th className="px-6 py-4 text-left">Created At</th>
              <th className="px-6 py-4 text-left">Updated At</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-[#424874]">
            {instructors.map((instructor, index) => (
              <tr
                key={instructor.id}
                className={`border-t ${index % 2 === 0 ? "bg-[#f4eeff]" : "bg-[#Dcd6f7]"}`}
              >
                <td className="px-6 py-4">{instructor.id}</td>
                <td className="px-6 py-4">{instructor.name}</td>
                <td className="px-6 py-4">{instructor.email}</td>
                <td className="px-6 py-4">{instructor.contactInfo}</td>
                <td className="px-6 py-4">{instructor.createdAt}</td>
                <td className="px-6 py-4">{instructor.updatedAt}</td>
                <td className="px-6 py-4 text-center">
                  <Tooltip content="Delete Instructor">
                    <IconButton
                      onClick={() => handleDelete(instructor.id)}
                      color="red"
                      className=" hover:bg-red-600"
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
          <h3 className="text-xl font-bold text-center mb-4">Are you sure you want to delete this instructor?</h3>
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

export default ManageInstructors;
