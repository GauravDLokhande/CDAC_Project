import { useState } from "react";
import Navbar from './../components/Navbar';

const CourseHero = () => {
  const modules = [
    {
      id: 1,
      title: "Module 1: Introduction",
      lessons: [
        { id: 1, title: "Introduction To Web Design", duration: "4min" },
        { id: 2, title: "Beautiful Typography", duration: "9min" },
      ],
    },
    {
      id: 2,
      title: "Module 2: Colors & Images",
      lessons: [
        { id: 3, title: "Using Colors Like A Pro", duration: "7min" },
        {
          id: 4,
          title: "The Meaning Of Colors In Web Design",
          duration: "1min",
        },
      ],
    },
    {
      id: 3,
      title: "Module 3: Working with Media",
      lessons: [
        { id: 5, title: "Working With Images", duration: "5min" },
        { id: 6, title: "Use CSS To Work With Images", duration: "3min" },
      ],
    },
  ];

  const [openModules, setOpenModules] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleModule = (moduleId) => {
    setOpenModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <div className="p-1 overflow-x-hidden ">

    <Navbar/> 
    <div className="flex h-screen w-screen bg-gray-100 relative overflow-x-hidden">
      {/* Left Side: Video Player */}
      <div className="flex-1 p-4">
        <div className="w-full h-[500px] bg-black rounded-lg shadow-lg">
          <video
            className="w-full h-full rounded-lg max-w-full"
            controls
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          />
        </div>
        <div className="max-w-4xl mx-auto p-6">
          {/* Course Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">
              Learn web design in 1 hour with 25+ simple-to-use rules and
              guidelines — tons of amazing web design resources included!
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-500">4.6 ★</span>
              <span className="text-gray-600">(42,420 ratings)</span>
              <span className="text-gray-600">782,297 students</span>
              <span className="text-gray-600">2.5 hours total</span>
            </div>

            {/* Course Details */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border border-gray-400 rounded-sm" />
                <span>Last updated November 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border border-gray-400 rounded-sm" />
                <span>English</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border border-gray-400 rounded-sm" />
                <span>English [Auto], Bulgarian [Auto], 19 more</span>
              </div>
            </div>
          </div>

          {/* Schedule Section */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Schedule learning time</h2>
            <p className="mb-4">
              Learning a little each day adds up. Research shows that students
              who make learning a habit are more likely to reach their goals.
              <br />
              Set time aside to learn and get reminders using your learning
              scheduler.
            </p>
            <div className="flex gap-4">
              <button className="text-blue-600 font-semibold">
                Get started
              </button>
              <button className="text-gray-600">Dismiss</button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">By the numbers</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>Skill level:</span>
                <span className="font-semibold">All Levels</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>Lectures:</span>
                <span className="font-semibold">19</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>Students:</span>
                <span className="font-semibold">782,297</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>Video:</span>
                <span className="font-semibold">2.5 total hours</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>Languages:</span>
                <span className="font-semibold">English</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>Captions:</span>
                <span className="font-semibold">Yes</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Features</h2>
            <p>Available on IOS and Android</p>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Description</h2>
            <p>
              IMPORTANT NOTE: The material of this course is also covered in my
              other
            </p>
          </div>



          {/* Instructor */}
          <div>
          <div className="flex mt-10 max-w-4xl bg-[#424874] text-white rounded-2xl overflow-hidden shadow-lg">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src="https://imgs.search.brave.com/V773q7dJ942PmM6tYWa_bz9vEdAaGlf85KAv147Ca4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb2Fj/aGluZy50aGltcHJl/c3MuY29tL2RlbW8t/aW5zdHJ1Y3Rvci93/cC1jb250ZW50L3Vw/bG9hZHMvc2l0ZXMv/NDUvMjAxNi8wMy9i/b29rLTMtMzQyeDM4/NC5qcGc"
          // Replace with actual image path
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Text Section */}
      <div className="w-2/3 p-10">
        <h2 className="text-2xl font-bold text-[#Dcd6f7]">Anna Doe</h2>
        <p className="text-sm font-semibold">Graphic Designer</p>
        <p className="text-[#Dcd6f7] mt-2">
          Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis malesuada.
          Aenean gravida magna orci, non efficitur est porta id. Donec magna diam.
        </p>
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
          </div>

        </div>
      </div>

      {/* Right Side: Course Content (Sidebar) */}
      <div
        className={`sticky top-0 right-0 h-full bg-white shadow-lg overflow-y-auto p-4 transition-transform duration-1000 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        } w-80 max-w-full`}
        >
        {/* Close Button */}
        <button
          onClick={() => setShowSidebar(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-[#a6b1e1] cursor-pointer text-xl"
        >
          ✖
        </button>

        <h2 className="text-lg font-bold mb-4">Course Content</h2>
        <ul>
          {modules.map((module) => (
            <li key={module.id} className="mb-2">
              {/* Module Header */}
              <div
                onClick={() => toggleModule(module.id)}
                className="p-3 bg-gray-200 font-semibold cursor-pointer flex justify-between items-center"
              >
                {module.title}
                <span>{openModules.includes(module.id) ? "🔽" : "▶️"}</span>
              </div>

              {/* Lessons Dropdown */}
              {openModules.includes(module.id) && (
                <ul className="bg-gray-50">
                  {module.lessons.map((lesson) => (
                    <li
                      key={lesson.id}
                      className="p-3 border-b cursor-pointer hover:bg-gray-100 flex justify-between items-center"
                    >
                      <span>{lesson.title}</span>
                      <span className="text-[#Dcd6f7] text-sm">
                        {lesson.duration}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Pull-Out Arrow Button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-[#424874] text-[#Dcd6f7] px-2 py-4 rounded-l-lg shadow-md hover:bg-[#424874] transition"
        >
        {showSidebar ? "▶" : "◀"}
      </button>

      <hr></hr>
    </div>
          </div>
  );
};

export default CourseHero;
