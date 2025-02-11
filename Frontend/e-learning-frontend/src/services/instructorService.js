import axios from "axios";

const BASE_URL = "http://localhost:8080/instructors/lessons";

export const fetchInstructorByLessonId = async (lessonId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${lessonId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching instructor details:", error);
    throw error;
  }
};