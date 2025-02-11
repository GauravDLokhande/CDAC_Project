import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Setquiz = () => {
  const { courseId, moduleId } = useParams();
  const [quiz, setQuiz] = useState({
    text: "", // Changed from 'question' to 'text'
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctOptionNumber: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Updated Quiz State:", quiz);
  }, [quiz]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field: ${name}, Value: ${value}`);
    setQuiz((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setError("");

    if (
      !quiz.text.trim() || // Changed from quiz.question to quiz.text
      !quiz.option1.trim() ||
      !quiz.option2.trim() ||
      !quiz.option3.trim() ||
      !quiz.option4.trim() ||
      !quiz.correctOptionNumber.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    const correctOption = parseInt(quiz.correctOptionNumber, 10);
    if (isNaN(correctOption) || correctOption < 1 || correctOption > 4) {
      setError("Please enter a valid option number (1-4).");
      return;
    }

    const questionData = {
      text: quiz.text.trim(), // Changed from question to text
      option1: quiz.option1.trim(),
      option2: quiz.option2.trim(),
      option3: quiz.option3.trim(),
      option4: quiz.option4.trim(),
      correctOptionNumber: correctOption,
    };

    console.log("Final Data Sent:", questionData);

    try {
      const response = await axios.post(
        `http://localhost:8080/quiz/${moduleId}/add-question`,
        questionData
      );

      if (response.status === 200) {
        alert("Question added successfully!");
        setQuiz({
          text: "", // Changed from 'question' to 'text'
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          correctOptionNumber: "",
        });
      }
    } catch (error) {
      console.error("Error adding question:", error);
      setError("Error adding question. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f4eeff] py-8 px-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-[#424874] mb-6">
          Set Up Quiz for Module {moduleId}
        </h1>

        {error && (
          <div className="mb-4 text-red-500 text-center font-semibold">{error}</div>
        )}

        <div className="mb-5">
          <label className="block text-lg font-medium text-[#424874] mb-2">
            Question:
          </label>
          <input
            type="text"
            name="text" // Changed from 'question' to 'text'
            value={quiz.text} // Changed from quiz.question to quiz.text
            onChange={handleInputChange}
            className="w-full p-4 border border-[#a6b1e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a6b1e1] transition duration-300"
            placeholder="Enter the question here..."
          />
        </div>

        <div className="space-y-4">
          {["option1", "option2", "option3", "option4"].map((option, index) => (
            <div key={index}>
              <label className="block text-lg font-medium text-[#424874] mb-2">
                Option {index + 1}:
              </label>
              <input
                type="text"
                name={option}
                value={quiz[option]}
                onChange={handleInputChange}
                className="w-full p-4 border border-[#a6b1e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a6b1e1] transition duration-300"
                placeholder={`Enter Option ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="mb-5">
          <label className="block text-lg font-medium text-[#424874] mb-2">
            Correct Option No.:
          </label>
          <input
            type="number"
            name="correctOptionNumber"
            value={quiz.correctOptionNumber}
            onChange={handleInputChange}
            className="w-full p-4 border border-[#a6b1e1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a6b1e1] transition duration-300 mb-2"
            placeholder="Enter correct option number (1-4)"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-[#1d4ed8] text-white font-semibold rounded-lg shadow-md hover:bg-[#1e40af] focus:outline-none focus:ring-2 focus:ring-[#a6b1e1] transition duration-300"
          >
            Save Quiz
          </button>
          <Link to={`/instructor/courses/${courseId}/modules`}>
            <button className="px-6 py-3 bg-[#Dcd6f7] text-[#424874] font-semibold rounded-lg shadow-md hover:bg-[#a6b1e1] focus:outline-none focus:ring-2 focus:ring-[#a6b1e1] transition duration-300">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Setquiz;