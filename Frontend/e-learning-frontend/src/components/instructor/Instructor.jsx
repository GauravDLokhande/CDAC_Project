import React, { useEffect, useState } from "react";
import { fetchInstructorByLessonId } from "../../services/instructorService";

const Instructor = ({ lessonId }) => {
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    if (!lessonId) return;
    const getInstructor = async () => {
      try {
        const instructorData = await fetchInstructorByLessonId(lessonId);
        setInstructor(instructorData);
      } catch (error) {
        console.error("Error fetching instructor:", error);
      }
    };
    getInstructor();
  }, [lessonId]);

  return (
    instructor && (
      <div className="flex mt-10 max-w-3xl bg-[#424874] text-white rounded-lg overflow-hidden shadow-lg">
        <div className="w-1/4">
          <img
            src={instructor.profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-3/4 p-6">
          <h2 className="text-xl font-bold text-[#Dcd6f7]">
            {instructor.firstName} {instructor.lastName}
          </h2>
          <p className="text-sm font-semibold">{instructor.designation}</p>
          <p className="text-[#Dcd6f7] mt-2">{instructor.bio}</p>
          <p className="text-[#f4eeff] text-sm mt-3">
            Ad, at blanditiis quaerat laborum officia incidunt cupiditate dignissimos voluptatem.
            Perfendis et totam ipsum ex aut earum libero accusamus.
          </p>
          {/* Rating */}
          <div className="mt-4 flex text-[#f4eeff]">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-lg">★</span>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Instructor;
