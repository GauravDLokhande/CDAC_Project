import React, { useEffect, useState } from "react";
import Cards from "../../components/students/Cards";
import { fetchCourses } from "../../services/coursesOnHomePage"; // Import your Axios service

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
    <div className="my-6 px-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <Cards
              key={index}
              image={course.courseImageUrl} // Use course image from backend
              title={course.courseName} // Use course name from backend
              courseId={course.courseId} // Pass course ID for navigation
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
