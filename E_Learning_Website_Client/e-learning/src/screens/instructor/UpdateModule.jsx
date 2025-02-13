import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiVideo, FiImage, FiFileText } from "react-icons/fi"; // React Icons
import Navbar from '../../components/global/Navbar';
import Footer from '../../components/global/Footer';

const AddLesson = () => {
  const navigate = useNavigate();
  const [lessonData, setLessonData] = useState({
    module: "",
    title: "",
    description: "",
    type: "Text",
    video: null,
    thumbnail: null,
  });

  const [errors, setErrors] = useState({});
  const modules = ["Introduction", "Advanced Topics", "Final Review"]; // Example modules

  const handleChange = (e) => {
    setLessonData({ ...lessonData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setLessonData({ ...lessonData, [e.target.name]: e.target.files[0] });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!lessonData.module) newErrors.module = "Module selection is required";
    if (!lessonData.title) newErrors.title = "Title is required";
    if (!lessonData.description) newErrors.description = "Description is required";
    if (lessonData.type === "Lecture" && !lessonData.video)
      newErrors.video = "Video file is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Lesson Added:", lessonData);
    navigate("/instructor/courses");
  };

  return (
    <div className="p-1 overflow-x-hidden">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#f4eeff] shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-[#424874] mb-6">Add New Lesson</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Module Selection */}
          <div>
            <label className="block text-[#424874] font-semibold">Select Module</label>
            <select
              name="module"
              value={lessonData.module}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-[#a6b1e1] rounded-lg focus:ring focus:ring-[#Dcd6f7]"
            >
              <option value="">Select Module</option>
              {modules.map((module, index) => (
                <option key={index} value={module}>
                  {module}
                </option>
              ))}
            </select>
            {errors.module && <p className="text-red-500 text-sm">{errors.module}</p>}
          </div>

          {/* Lesson Title */}
          <div>
            <label className="block text-[#424874] font-semibold">Lesson Title</label>
            <input
              type="text"
              name="title"
              value={lessonData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-[#a6b1e1] rounded-lg focus:ring focus:ring-[#Dcd6f7]"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-[#424874] font-semibold">Description</label>
            <textarea
              name="description"
              value={lessonData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-[#a6b1e1] rounded-lg focus:ring focus:ring-[#Dcd6f7]"
              rows="3"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          {/* Lesson Type */}
          <div>
            <label className="block text-[#424874] font-semibold">Lesson Type</label>
            <select
              name="type"
              value={lessonData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-[#a6b1e1] rounded-lg focus:ring focus:ring-[#Dcd6f7]"
            >
              <option value="Text">Text</option>
              <option value="Lecture">Lecture</option>
            </select>
          </div>

          {/* File Inputs (Only for Lecture) */}
          {lessonData.type === "Lecture" && (
            <>
              {/* Video Upload */}
              <div>
                <label className=" text-[#424874] font-semibold flex items-center gap-2">
                  <FiVideo className="text-xl text-[#424874]" /> Upload Video
                </label>
                <input
                  type="file"
                  name="video"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 mt-2 border border-[#a6b1e1] rounded-lg"
                />
                {errors.video && <p className="text-red-500 text-sm">{errors.video}</p>}
              </div>

              {/* Thumbnail Upload */}
              <div>
                <label className="block text-[#424874] font-semibold  items-center gap-2">
                  <FiImage className="text-xl text-[#424874]" /> Upload Thumbnail
                </label>
                <input
                  type="file"
                  name="thumbnail"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 mt-2 border border-[#a6b1e1] rounded-lg"
                />
              </div>
            </>
          )}

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
              Add Lesson
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddLesson;
