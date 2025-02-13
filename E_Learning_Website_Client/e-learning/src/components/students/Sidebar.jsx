import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ modules, showSidebar, setShowSidebar }) => {
  const [openModules, setOpenModules] = useState([]);
  const navigate = useNavigate();

  const toggleModule = (moduleId) => {
    setOpenModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <div
      className={`sticky top-0 right-0 h-full bg-white shadow-lg overflow-y-auto p-4 transition-transform duration-700 ${showSidebar ? "translate-x-0" : "translate-x-full"} w-80 max-w-full`}
    >
      <h2 className="text-lg font-bold mb-4">Course Content</h2>
      <ul>
        {modules.map((module) => (
          <li key={module.id} className="mb-2">
            <div
              onClick={() => toggleModule(module.id)}
              className="p-3 bg-gray-200 font-semibold cursor-pointer flex justify-between items-center"
            >
              {module.title}
              <span>{openModules.includes(module.id) ? "▼" : "▶"}</span>
            </div>
            {openModules.includes(module.id) && (
              <ul className="bg-gray-50">
                {module.lessons.map((lesson) => (
                  <li
                    key={lesson.id}
                    className="p-3 border-b cursor-pointer hover:bg-gray-100 flex justify-between items-center"
                  >
                    <span>{lesson.title}</span>
                    <span className="text-[#Dcd6f7] text-sm">{lesson.duration}</span>
                  </li>
                ))}
                {/* Quiz Section */}
                <li
                  onClick={() => navigate(`/quiz/${module.id}`)}
                  className="p-3 border-t cursor-pointer bg-blue-100 hover:bg-blue-200 text-center font-semibold"
                >
                  Take Quiz
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default Sidebar;