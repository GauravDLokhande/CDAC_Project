import React from "react";
import image_4 from '../../assets/Carousel/image_4.jpg'
import image_5 from '../../assets/Carousel/image_5.jpg'
import image_6 from '../../assets/Carousel/image_6.jpg'
import Navbar from './../../components/global/Navbar';
import CourseCard from './../../components/students/CourseCard';
import QuoteCard from './../../components/students/QuoteCard';
import Footer from './../../components/global/Footer';




const MyLearning = () => {
  const mockUser = {
    name: "John Doe",
    role: "user_student", // Change this role to test different navbar links
    profilePicture: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };

    const courses = [
      {
        title: "Web Design for Web Developers: Build Beautiful Websites!",
        instructor: "Jonas Schmedtmann",
        progress: 43,
        image: image_4,
      },
      {
        title: "JavaScript: Understanding the Weird Parts",
        instructor: "Anthony Alicea",
        progress: 65,
        image: image_5,
      },
      {
        title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        instructor: "Maximilian Schwarzmüller",
        progress: 30,
        image: image_6,
      }
    ];
  
    return (
        <div className="p-1 overflow-x-hidden">
      <Navbar user={mockUser} />
      <div className="p-6 mt-20">
          <h1 className="text-3xl font-bold text-[#424874] mb-6">My Learning</h1>
          <div className="flex flex-col gap-6 items-start w-full">
            <QuoteCard />
            <div className="flex flex-wrap gap-6 justify-start px-4 py-2 hover:cursor-pointer ">
              {courses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>
        </div>
        <Footer/>
      </div>


      
    );
  };
  
  export default MyLearning;