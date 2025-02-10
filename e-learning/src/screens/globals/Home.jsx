import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
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

  useEffect(() => {
    const fetchUserFromToken = () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          setUser({
            name: decoded.name,
            role: decoded.role,
            profilePicture: decoded.profilePicture || "",
          });
        } catch (error) {
          console.error("Invalid token:", error);
          localStorage.removeItem("token");
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    fetchUserFromToken();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-1 overflow-x-hidden">
      <Navbar user={user} /> 

      {/* Student & Guest View (Same Content) */}
      {!user || user.role === "user_student" ? (
        <>
              

          <CenteredRotatingText />
          <Carousel_Intro />
          <UseBodyCards />
          <Footer />
        </>
      ) : null}

      {/* Instructor View */}
      {user?.role === "user_instructor" && (
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
      {user?.role === "user_admin" && (
        <div className="flex">
          <AdminDashboard />
        </div>
      )}
    </div>
  );
};

export default Home;
