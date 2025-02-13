import Footer from "../../components/global/Footer";
import Navbar from "../../components/global/Navbar";
import InstructorHomeDashboard from "../../components/instructor/InstructorHomeDashboard";
import SplitText from "../../components/instructor/SplitText";
import Carousel_Intro from "../../components/students/Carousel_Intro";
import CenteredRotatingText from "../../components/students/CenteredRotatingText";
import UseBodyCards from './../student/UseBodyCards';
import AdminDashboard from './../admin/AdminDashboard';

const Home = () => {
  const mockUser = {
    name: "John Doe",
    role: "user_student", // Change this role to test different navbar links
    profilePicture: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };


  return (
    <div className="p-1 overflow-x-hidden">
      <Navbar user={mockUser} />

      {/* Show both CenteredRotatingText and Carousel_Intro only for students */}
      {mockUser.role === "user_student" && (
        <>
          <CenteredRotatingText />
          <Carousel_Intro />
          <UseBodyCards />
          <Footer />
        </>
      )}

      {/* Show Instructor Dashboard */}
      {mockUser.role === "user_instructor" && (
        <>
          <div className="flex mt-10 justify-center items-center h-[calc(100vh-50%)]">
            <div className="text-4xl sm:text-5xl md:text-6xl font-semibold flex items-center gap-2 sm:gap-3 md:gap-4">
              <SplitText
                text={`Welcome, Instructor ${mockUser.name}!`}
                className=" text-[#424874] font-semibold text-center"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
          </div>
          <InstructorHomeDashboard />
          <Footer />
        </>
      )}

      {/* Admin View */}
      {mockUser.role === "user_admin" && (
  <div className="flex">
      <AdminDashboard/>

  </div>
)}

    </div>
  );
};

export default Home;
