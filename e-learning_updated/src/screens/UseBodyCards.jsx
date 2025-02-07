import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { fetchCourses } from "../services/coursesOnHomePage"; // Import your Axios service

const UseBodyCards = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await fetchCourses(); // Fetch courses from backend
        console.log(data);
        setCourses(data); // Set the fetched data to state
      } catch (error) {
        console.error("Failed to load courses", error); // Handle error if fetching fails
      }
    };

    getCourses();
  }, []);

  return (
    <div className="m-10 border-1 border-b-black rounded-2xl shadow-2xl h-[850px] w-[1450px]">
      <div className="grid grid-cols-4 gap-2">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <Cards
              key={index}
              image={course.courseImageUrl} // Use course image from backend
              title={course.courseName} // Use course name from backend
            />
          ))
        ) : (
          <p>Loading courses...</p> // Show loading message if data is not fetched
        )}
      </div>
    </div>
  );
};

export default UseBodyCards;
