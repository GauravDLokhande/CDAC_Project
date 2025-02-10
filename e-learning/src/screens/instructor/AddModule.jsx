import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/global/Navbar';
import Footer from '../../components/global/Footer';

const AddModule = () => {
  const navigate = useNavigate();
  const [moduleData, setModuleData] = useState({
    name: "",
    description: "",
    order: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setModuleData({ ...moduleData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!moduleData.name) newErrors.name = "Module name is required";
    if (!moduleData.description)
      newErrors.description = "Description is required";
    if (!moduleData.order || isNaN(moduleData.order))
      newErrors.order = "Order must be a number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Module Added:", moduleData);
    // TODO: Send moduleData to the backend

    navigate("/instructor/courses"); // Redirect after successful addition
  };

  return (
    <div className="p-1 overflow-x-hidden">
      <Navbar />
      <div>
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#f4eeff] shadow-md rounded-lg">
          <h2 className="text-3xl font-bold text-[#424874] mb-6">
            Add New Module
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Module Name */}
            <div>
              <label className="block text-[#424874] font-semibold">
                Module Name
              </label>
              <input
                type="text"
                name="name"
                value={moduleData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-[#a6b1e1] rounded-lg focus:ring focus:ring-[#Dcd6f7]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-[#424874] font-semibold">
                Description
              </label>
              <textarea
                name="description"
                value={moduleData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-[#a6b1e1] rounded-lg focus:ring focus:ring-[#Dcd6f7]"
                rows="3"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-[#Dcd6f7] text-[#424874] rounded-lg hover:bg-[#a6b1e1]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#424874] text-white rounded-lg hover:bg-[#2e3155]"
              >
                Add Module
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AddModule;
