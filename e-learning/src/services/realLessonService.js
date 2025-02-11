import axios from 'axios';

const API_URL = 'http://localhost:8080/lessons';

export const fetchLessonData = async (lessonId) => {
  try {
    const response = await axios.get(`${API_URL}/${lessonId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching lesson data", error);
    throw error;
  }
};
