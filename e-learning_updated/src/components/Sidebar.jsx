import React, { useEffect, useState } from "react";
import moduleService from "../services/moduleService";
import { fetchLessons } from "../services/lessonsInModules";

const Sidebar = ({ courseId, showSidebar, setShowSidebar, setLessonId }) => {
  const [modules, setModules] = useState([]);
  const [openModules, setOpenModules] = useState([]);
  const [lessons, setLessons] = useState({});
  const [error, setError] = useState(null);

  // Fetch modules based on courseId
  useEffect(() => {
    const fetchModules = async () => {
      if (!courseId) {
        console.warn("No courseId provided to fetch modules.");
        return;
      }

      try {
        const fetchedModules = await moduleService.getModulesByCourseId(courseId);
        setModules(fetchedModules);
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };

    fetchModules();
  }, [courseId]);

  // Fetch lessons when a module is clicked
  const handleModuleClick = async (moduleId, moduleName) => {
    // Toggle the module open/close
    setOpenModules((prev) =>
      prev.includes(moduleName)
        ? prev.filter((name) => name !== moduleName)
        : [...prev, moduleName]
    );

    // Fetch lessons if not already fetched
    if (!lessons[moduleId]) {
      try {
        const fetchedLessons = await fetchLessons(moduleId);
        setLessons((prev) => ({ ...prev, [moduleId]: fetchedLessons }));
      } catch (err) {
        setError("Failed to fetch lessons");
      }
    }
  };

  // Update lessonId in MyCourse when a lesson is clicked
  const handleLessonClick = (lessonId) => {
    console.log("Lesson clicked:", lessonId);
    setLessonId(lessonId); // Pass lessonId to MyCourse.jsx
  };

  return (
    <div
      className={`sticky top-0 right-0 h-full bg-white shadow-lg overflow-y-auto p-4 transition-transform duration-700 ${
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
      {modules.length > 0 ? (
        <ul>
          {modules.map((module) => (
            <li key={module.moduleId} className="mb-2">
              <div
                onClick={() => handleModuleClick(module.moduleId, module.moduleName)}
                className="p-3 bg-gray-200 font-semibold cursor-pointer flex justify-between items-center"
              >
                {module.moduleName}
                <span>{openModules.includes(module.moduleName) ? "🔽" : "▶️"}</span>
              </div>

              {openModules.includes(module.moduleName) && (
                <div>
                  {/* Show module description */}
                  <p className="p-3 bg-gray-50 border-l-4 border-gray-200">
                    {module.moduleDescription}
                  </p>

                  {/* Show lessons */}
                  <ul className="p-3 bg-gray-50">
                    {lessons[module.moduleId] ? (
                      lessons[module.moduleId].map((lesson) => (
                        <li
                          key={lesson.lessonId}
                          className="p-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => handleLessonClick(lesson.lessonId)} // Pass lessonId
                        >
                          {lesson.lessonTitle}
                        </li>
                      ))
                    ) : (
                      <p>Loading lessons...</p>
                    )}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No modules available for this course.</p>
      )}

      {/* Error message */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Sidebar;
