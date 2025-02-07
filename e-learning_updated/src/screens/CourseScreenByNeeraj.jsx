  import { useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Footer from "../components/Footer";
import text_logo from "../assets/text_logo.png";

const CourseScreenByNeeraj = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#f4eeff] text-gray-900 flex flex-col">

      <header className="bg-[#424874] py-2 text-center text-3xl font-extrabold text-white shadow-lg flex items-center justify-between px-10">
        {/* Align logo to the left */}
        <div className="flex items-center space-x-4">
          <img src={text_logo} alt="Company Logo" className="w-40 h-auto" />
        </div>
        <h1 className="flex-2 text-right mr-7">Instructor Dashboard</h1>
      </header>

      <div className="flex flex-1 p-6 gap-6">
        
        <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
          <Card className="mb-6 shadow-xl cursor-pointer" onClick={() => toggleSection("video")}> 
            <CardContent className="bg-[#dcd6f7] rounded-xl p-6 flex justify-between items-center">
              <Typography variant="h5" className="text-center font-bold text-[#424874]">
                Video Content
              </Typography>
              {openSection === "video" ? <FaChevronUp /> : <FaChevronDown />}
            </CardContent>
          </Card>
          {openSection === "video" && (
            <div className="p-4 bg-[#a6b1e1] rounded-md">Video content goes here...</div>
          )}

          <Card className="mb-6 shadow-md cursor-pointer" onClick={() => toggleSection("overview")}> 
            <CardContent className="bg-[#dcd6f7] rounded-md p-4 flex justify-between items-center">
              <Typography variant="h6" className="font-semibold text-[#424874]">
                Course Overview
              </Typography>
              {openSection === "overview" ? <FaChevronUp /> : <FaChevronDown />}
            </CardContent>
          </Card>
          {openSection === "overview" && (
            <div className="p-4 bg-[#a6b1e1] rounded-md">Course overview details...</div>
          )}

          <Card className="shadow-md cursor-pointer" onClick={() => toggleSection("discussion")}> 
            <CardContent className="bg-[#dcd6f7] rounded-md p-4 flex justify-between items-center">
              <Typography variant="h6" className="font-semibold text-[#424874]">
                Discussion Forum
              </Typography>
              {openSection === "discussion" ? <FaChevronUp /> : <FaChevronDown />}
            </CardContent>
          </Card>
          {openSection === "discussion" && (
            <div className="p-4 bg-[#a6b1e1] rounded-md">Discussion content...</div>
          )}
        </div>

        
        <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <Button
            variant="contained"
            className="w-full mb-6 bg-[#424874] text-white hover:bg-[#a6b1e1] py-3 font-semibold"
          >
            Add New Content
          </Button>

          <Card className="shadow-md">
            <CardContent className="bg-[#dcd6f7] rounded-md p-5">
              <Typography variant="h6" className="font-semibold text-center text-[#424874]">
                Content Library
              </Typography>
            </CardContent>
          </Card>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CourseScreenByNeeraj;
