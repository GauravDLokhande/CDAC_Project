import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { Card, CardHeader, CardBody, Typography, Tooltip, IconButton } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';  // Import toast
import Modal from 'react-modal';

// Modal should be set up to bind to the app element
Modal.setAppElement('#root');

const ManageCourses = ({ courses }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);

  const handleDelete = (id) => {
    setCourseToDelete(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    // Proceed with the delete logic if confirmed
    console.log(`Deleting course with ID: ${courseToDelete}`);

    // Show a loading toast during the deletion process
    const deletingToast = toast.loading("Deleting course...");

    // Simulate delete action (replace with your actual delete logic)
    setTimeout(() => {
      // Delete succeeded, show success toast
      toast.success('Course deleted successfully!', {
        id: deletingToast,  // Replace the loading toast with success
        position: 'top-right',
        duration: 3000,
      });

      // Close the modal after deletion
      setIsModalOpen(false);
      setCourseToDelete(null);
    }, 1000);  // Simulating delay (1 second) for delete operation
  };

  return (
    <Card className="mt-5">
      <CardHeader color="blue-gray" className="p-4 bg-[#2a2e4e]">
        <Typography variant="h5" color="white">
          Courses Table
        </Typography>
      </CardHeader>
      <CardBody>
        <div className="mb-4 text-right">
          {/* Add Course Button */}
          <Link to="/admin/create-course">
            <button className="px-4 py-2 bg-[#a6b1e1] hover:cursor-pointer hover:bg-[#2a2e4e] text-[#2a2e4e] rounded-md hover:text-[#f4eeff] ">
              Add New Course
            </button>
          </Link>
        </div>
        <table className="min-w-full bg-white border border-[#a6b1e1] shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-[#2a2e4e] text-[#f4eeff]">
            <tr>
              <th className="px-6 py-4 text-left">Course ID</th>
              <th className="px-6 py-4 text-left">Course Name</th>
              <th className="px-6 py-4 text-left">Description</th>
              <th className="px-6 py-4 text-left">Instructor</th>
              <th className="px-6 py-4 text-left">Created At</th>
              <th className="px-6 py-4 text-left">Updated At</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-[#424874]">
            {courses.map((course, index) => (
              <tr
                key={course.id}
                className={`border-t ${index % 2 === 0 ? 'bg-[#f4eeff]' : 'bg-[#Dcd6f7]'}`}
              >
                <td className="px-6 py-4">{course.id}</td>
                <td className="px-6 py-4">{course.name}</td>
                <td className="px-6 py-4">{course.description}</td>
                <td className="px-6 py-4">{course.instructor}</td>
                <td className="px-6 py-4">{course.createdAt}</td>
                <td className="px-6 py-4">{course.updatedAt}</td>
                <td className="px-6 py-4 text-center">
                  <Tooltip content="Delete Course">
                    <IconButton
                      onClick={() => handleDelete(course.id)}
                      color="red"
                      className="hover:cursor-pointer hover:bg-red-600"
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
          <h3 className="text-xl font-bold text-center mb-4">Are you sure you want to delete this course?</h3>
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

export default ManageCourses;
