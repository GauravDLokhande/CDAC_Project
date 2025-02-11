import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/global/Footer";
import Navbar from "../../components/global/Navbar";
import InstructorHomeDashboard from "../../components/instructor/InstructorHomeDashboard";
import SplitText from "../../components/instructor/SplitText";
import Carousel_Intro from "../../components/students/Carousel_Intro";
import CenteredRotatingText from "../../components/students/CenteredRotatingText";
import UseBodyCards from "../student/UseBodyCards";
import AdminDashboard from "../admin/AdminDashboard";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
      setLoading(false);
    };

    fetchUserFromLocalStorage();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-1 overflow-x-hidden">
      {/* Conditionally render Navbar based on user role */}
      {user?.role !== "ROLE_ADMIN" && <Navbar user={user} />}
      
      {/* Student & Guest View (Same Content) */}
      {!user || user.role === "ROLE_STUDENT" ? (
        <>
          <CenteredRotatingText />
          <Carousel_Intro />
          
          {/* Course Cards Section */}
          <div className="my-6 px-6">
            <h2 className="text-center text-3xl font-bold mb-6 text-[#424874]">Explore Our Courses</h2>
              <UseBodyCards />
       
          </div>

          <Footer />
        </>
      ) : null}

      {/* Instructor View */}
      {user?.role === "ROLE_INSTRUCTOR" && (
        <>
          <div className="flex mt-10 justify-center items-center h-[calc(100vh-50%)]">
            <div className="text-4xl sm:text-5xl md:text-6xl font-semibold flex items-center gap-2 sm:gap-3 md:gap-4">
              <SplitText
                text={`Welcome, Instructor ${user.name}!`}
                className="text-[#424874] font-semibold text-center"
                delay={150}
                animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>
          </div>
          <InstructorHomeDashboard />
          <Footer />
        </>
      )}

      {/* Admin View */}
      {user?.role === "ROLE_ADMIN" && (
        <div className="flex">
          <AdminDashboard />
        </div>
      )}
    </div>
  );
};

export default Home;
