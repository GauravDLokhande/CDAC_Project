import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { ExclamationTriangleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Bind modal to app element
Modal.setAppElement("#root");

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirm Logout"
      className="bg-white p-6 rounded-lg shadow-lg w-96 z-50 relative"
      overlayClassName="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="absolute top-0 right-0 p-2">
        <button onClick={onClose}>
          <XMarkIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
        </button>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold text-gray-800">Confirm Logout</h2>
        <div className="mt-4 flex items-center gap-2">
          <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />
          <p className="text-gray-600">Are you sure you want to log out?</p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
};

const LogoutButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from local storage
    localStorage.removeItem("token"); // Remove token from local storage
    logout(); // Call logout function from AuthContext
    toast.success("Logged out successfully"); // Show toast notification
    console.log("User logged out!");
    setIsModalOpen(false);
    navigate("/"); // Navigate to the home page
    setTimeout(() => {
      window.location.reload(); // Refresh the page after a short delay
    }, 500);
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="hover:text-red text-red rounded-lg hover:cursor-pointer"
      >
        Logout
      </button>

      <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default LogoutButton;
