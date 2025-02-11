import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import axios from "axios";
import { toast } from "react-hot-toast";

const UpdateStudentScreen = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    contactNo: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setFormData(parsedUser);
    } else {
      axios.get(`http://localhost:8080/admin/student/${userId}`)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          toast.error("Error fetching student data");
          console.error("Error fetching student data:", error);
        });
    }
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/admin/updateStudent/${userId}`, formData)
      .then(() => {
        toast.success("Student updated successfully");
        localStorage.setItem("user", JSON.stringify(formData));
        navigate("/admin/manage-students");
      })
      .catch((error) => {
        toast.error("Error updating student");
        console.error("Error updating student:", error);
      });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar user={{ name: "Admin", role: "admin" }} />
      <div className="flex-1 flex justify-center items-center p-8">
        <div className="w-full max-w-4xl bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Update Student</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter username"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter email address"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Contact No</label>
              <input
                type="text"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
                placeholder="Enter contact info"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-0"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#424874] mt-4 text-white cursor-pointer hover:bg-[#Dcd6f7] hover:text-[#424874] font-medium rounded-md transition duration-300"
              >
                Update Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudentScreen;
