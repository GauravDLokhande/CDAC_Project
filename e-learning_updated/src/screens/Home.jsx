import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Carousel_Intro from "../components/Carousel_Intro";
import UseBodyCards from "./useBodyCards";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  useEffect(() => {
    // Show toast message if redirected after login
    const loginSuccess = localStorage.getItem("loginSuccess");
    if (loginSuccess) {
      toast.success("Login successful!");
      localStorage.removeItem("loginSuccess"); // Clear the flag after displaying the message
    }
  }, []);

  return (
    <div className="p-1 overflow-x-hidden">
      <Navbar />
      <Carousel_Intro />
      <UseBodyCards />
      <Footer />
      {/* Toast Container for displaying toast messages */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Home;
