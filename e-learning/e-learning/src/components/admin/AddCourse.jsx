import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCourse = ({ instructors }) => {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Course Added:', { courseName, description, instructor });

    // API Call to save the course data (Replace this with actual API request)
    
    navigate('/admin/manage-courses'); // Redirect after submission
  };

  return (
    <div className="w-full max-w-4xl bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Add New Course</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Course Name */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Course Name
          </label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
            placeholder="Enter course name"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-0"
          />
        </div>

        {/* Course Description */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter course description"
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-0"
            rows="4"
          />
        </div>

        {/* Instructor Selection */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Select Instructor
          </label>
          <select
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            required
            className="w-full border border-gray-300 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-"
          >
            <option   value="">-- Choose an Instructor --</option>
            {instructors.map((inst) => (
              <option key={inst.id} value={inst.name}>
                {inst.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#424874] mt-4 text-white cursor-pointer hover:bg-[#Dcd6f7] hover:text-[#424874]  font-medium rounded-md transition duration-300"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
