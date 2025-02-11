import { useState, useEffect } from "react";
import Sidebar from "../../components/students/Sidebar"; // Ensure this import is correct
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi"; // Import arrow icons
import VideoPanel from "../../components/students/VideoPanel"; // Add VideoPanel if necessary
import CourseOverview from "../../components/students/CourseOverview"; // Add CourseOverview if necessary

export default function Quiz() {
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility
  const [questions, setQuestions] = useState([]); // State for quiz questions
  const [selectedOptions, setSelectedOptions] = useState([]); // State to track selected answers

  // Fetch quiz questions from API
  useEffect(() => {
    fetch("http://localhost:8080/quiz/1/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data); // Set questions from API response
        setSelectedOptions(Array(data.length).fill(null)); // Initialize selectedOptions based on the number of questions
      })
      .catch((error) => {
        console.error("Error fetching quiz questions:", error);
      });
  }, []);

  const handleRadioChange = (questionIndex, option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };

  // Empty modules for Sidebar (you can pass actual data here if needed)
  const modules = [
    { id: 1, title: "Module 1: Introduction", lessons: [{ id: 1, title: "Introduction To Web Design", duration: "4min" }] },
    { id: 2, title: "Module 2: Colors & Images", lessons: [{ id: 2, title: "Using Colors Like A Pro", duration: "7min" }] },
  ];

  return (
    <div className="p-1 overflow-x-hidden">
      <div className="flex h-screen w-screen bg-gray-100 relative overflow-x-hidden">
        {/* Left Side: Quiz Content */}
        <div
          className={`flex-1 m-3 p-4 transition-all duration-300 ${showSidebar ? "w-3/4" : "w-full"}`} // Adjust width based on showSidebar state
        >
          <h2 className="font-extrabold text-3xl mb-3">Quiz</h2>
          {questions.length > 0 ? (
            questions.map((q, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-semibold mb-3">{`${index + 1}. ${q.text}`}</h2>
                <div className="space-y-2">
                  {q.options.map((option, optionIndex) => (
                    <label key={optionIndex} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name={`quiz-${index}`}
                        className="h-5 w-5 text-blue-600 border-gray-300 rounded"
                        checked={selectedOptions[index] === option.text} // Make sure we compare the text property of option
                        onChange={() => handleRadioChange(index, option.text)} // Store the text value as the selected option
                      />
                      <span className="text-gray-700">{option.text}</span> {/* Render the 'text' property */}
                    </label>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>Loading questions...</p>
          )}
          <button className="mt-6 w-50 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Submit Answers
          </button>
        </div>

        {/* Right Side: Sidebar */}
        <Sidebar modules={modules} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        {/* Toggle Button for Sidebar */}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-[#424874] text-[#Dcd6f7] p-4 rounded-l-lg shadow-md hover:bg-[#424874] transition"
        >
          {showSidebar ? <FiArrowRightCircle size={24} /> : <FiArrowLeftCircle size={24} />}
        </button>
      </div>
    </div>
  );
}
