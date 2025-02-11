import React, { useEffect, useState } from "react";
import moduleService from "../../services/moduleService";
import { fetchLessons } from "../../services/lessonsInModules";
import { FiChevronDown, FiChevronRight } from "react-icons/fi"; // Import icons from React Icons

const Sidebar = ({ courseId, showSidebar, setShowSidebar, setLessonId }) => {
  const [modules, setModules] = useState([]);
  const [openModules, setOpenModules] = useState([]);
  const [lessons, setLessons] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModules = async () => {
      if (!courseId) return;
      try {
        const fetchedModules = await moduleService.getModulesByCourseId(courseId);
        setModules(fetchedModules);
      } catch (error) {
        console.error("Error fetching modules:", error);
        setError("Failed to fetch modules");
      }
    };
    fetchModules();
  }, [courseId]);

  const handleModuleClick = async (moduleId, moduleName) => {
    setOpenModules((prev) =>
      prev.includes(moduleName) ? prev.filter((name) => name !== moduleName) : [...prev, moduleName]
    );
    if (!lessons[moduleId]) {
      try {
        const fetchedLessons = await fetchLessons(moduleId);
        setLessons((prev) => ({ ...prev, [moduleId]: fetchedLessons }));
      } catch (error) {
        console.error("Failed to fetch lessons:", error);
        setError("Failed to fetch lessons");
      }
    }
  };

  return (
    <div className={`sticky top-0 right-0 h-full bg-white shadow-lg overflow-y-auto p-4 transition-transform duration-700 ${showSidebar ? "translate-x-0" : "translate-x-full"} w-80 max-w-full`}>
      <button onClick={() => setShowSidebar(false)} className="absolute top-3 right-3 text-gray-600">✖</button>
      <h2 className="text-lg font-bold mb-4">Course Content</h2>
      {modules.length > 0 ? (
        <ul>
          {modules.map((module) => (
            <li key={module.moduleId} className="mb-2">
              <div onClick={() => handleModuleClick(module.moduleId, module.moduleName)} className="p-3 bg-gray-200 font-semibold cursor-pointer flex justify-between items-center">
                {module.moduleName}
                <span>{openModules.includes(module.moduleName) ? <FiChevronDown /> : <FiChevronRight />}</span>
              </div>
              {openModules.includes(module.moduleName) && (
                <div>
                  <p className="p-3 bg-gray-50 border-l-4 border-gray-200">{module.moduleDescription}</p>
                  <ul className="bg-gray-50">
                    {lessons[module.moduleId] ? (
                      lessons[module.moduleId].map((lesson) => (
                        <li key={lesson.lessonId} className="p-3 border-b cursor-pointer hover:bg-gray-100 flex justify-between items-center" onClick={() => setLessonId(lesson.lessonId)}>
                          <span>{lesson.lessonTitle}</span>
                          <span className="text-[#Dcd6f7] text-sm">{lesson.duration || ''}</span>
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
        <p>No modules available for this course.</p>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Sidebar;
