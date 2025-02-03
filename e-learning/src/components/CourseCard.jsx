import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const CourseCard = ({ course }) => {
  return (
    <div className="bg-[#f4eeff] p-4 rounded-lg shadow-md w-80 flex flex-col">
      <img src={course.image} alt={course.title} className="w-full h-40 rounded-md object-cover" />
      <div className="mt-4">
        <h3 className="text-md font-semibold text-[#424874]">{course.title}</h3>
        <p className="text-[#a6b1e1] text-sm">{course.instructor}</p>
        <div className="w-full bg-[#Dcd6f7] rounded-full h-2 mt-2">
          <div className="bg-[#424874] h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
        </div>
        <p className="text-[#a6b1e1] text-sm mt-1">{course.progress}% complete</p>
        
        <Link to="/mycourse">
          <button className="mt-4 cursor-pointer bg-[#424874] text-white px-4 py-2 rounded-lg w-full hover:text-[#424874] hover:bg-[#a6b1e1] transition">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
