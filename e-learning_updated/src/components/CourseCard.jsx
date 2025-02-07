import React from "react";

const CourseCard = ({ course, onContinue }) => {
  return (
    <div className="bg-[#f4eeff] p-4 rounded-lg shadow-md w-80 flex flex-col">
      {/* Course Image */}
      <img
        src={course.courseImageUrl}
        alt={course.courseName}
        className="w-full h-40 rounded-md object-cover"
      />

      {/* Course Details */}
      <div className="mt-4">
        <h3 className="text-md font-semibold text-[#424874]">{course.courseName}</h3>
        
        <button
          onClick={onContinue} // Trigger the callback
          className="mt-4 cursor-pointer bg-[#424874] text-white px-4 py-2 rounded-lg w-full hover:text-[#424874] hover:bg-[#a6b1e1] transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
