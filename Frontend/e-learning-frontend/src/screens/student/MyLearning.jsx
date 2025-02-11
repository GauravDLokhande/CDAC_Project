import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import QuoteCard from "../../components/students/QuoteCard";
import CourseCard from "../../components/students/CourseCard";
import enrollmentService from "../../services/enrollmentService";

const MyLearning = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserFromLocalStorage = () => {
      const userString = localStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        setUser({
          name: `${user.firstName} ${user.lastName}`,
          role: user.role,
          profilePicture: user.profilePic || "",
          designation: user.designation,
          bio: user.bio,
          email: user.email,
        });
      } else {
        setUser(null);
      }
    };

    fetchUserFromLocalStorage();

    const fetchEnrolledCourses = async () => {
      try {
        const enrolledCourses = await enrollmentService.getEnrolledCourses();
        console.log("Fetched enrolled courses:", enrolledCourses); // Log the fetched data to the console
        setCourses(enrolledCourses);
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    fetchEnrolledCourses();
  }, []);

  const handleContinue = (courseId) => {
    // Pass courseId to the next page and Sidebar component
    navigate(`/mycourse/${courseId}`, { state: { courseId } });
  };

  return (
    <div className="p-1 overflow-x-hidden">
      <Navbar user={user} />
      <div className="p-6 mt-20">
        <h1 className="text-3xl font-bold text-[#424874] mb-6">My Learning</h1>
        <div className="flex flex-col gap-6 items-start w-full">
          <QuoteCard />
          <div className="flex flex-wrap gap-6 justify-start px-4 py-2 hover:cursor-pointer">
            {courses.length > 0 ? (
              courses.map((course) => (
                <CourseCard
                  key={course.courseId}
                  course={course}
                  onContinue={() => handleContinue(course.courseId)}
                />
              ))
            ) : (
              <p className="text-lg text-gray-600">No courses enrolled yet.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyLearning;
