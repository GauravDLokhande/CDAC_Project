import { useState } from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import Modal from "react-modal";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";



Modal.setAppElement("#root");

const ManageInstructors = ({ instructors }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [instructorToDelete, setInstructorToDelete] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setInstructorToDelete(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    console.log(`Deleting instructor with ID: ${instructorToDelete}`);
    const deletingToast = toast.loading("Deleting instructor...");
    setTimeout(() => {
      toast.success("Instructor deleted successfully!", {
        id: deletingToast,
        position: "top-right",
        duration: 3000,
      });
      setIsModalOpen(false);
      setInstructorToDelete(null);
    }, 1000);
  };

  const handleUpdate = (id) => {
    navigate(`/admin/update-instructor/${id}`);
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
                <td className="px-6 py-4 text-center flex justify-center space-x-10">
                  <Tooltip content="Update Instructor">
                    <IconButton
                      onClick={() => handleUpdate(instructor.id)}
                      color="blue"
                      className="hover:bg-blue-600"
                    >
                      <PencilSquareIcon className="h-5 w-5 text-white" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip content="Delete Instructor">
                    <IconButton
                      onClick={() => handleDelete(instructor.id)}
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
