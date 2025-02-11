import axios from 'axios';

// Base URL of the backend
const BASE_URL = "http://localhost:8080";

// Fetch lessons by moduleId
export const fetchLessonsByModule = async (moduleId) => {
  try {
    const response = await axios.get(`${BASE_URL}/modules/lessons/${moduleId}`);
    return response.data; // Return lessons list
  } catch (error) {
    console.error('Error fetching lessons for module:', error);
    throw error;
  }
};

// Fetch lesson details by lessonId
export const fetchLessonDetails = async (lessonId) => {
  try {
    const response = await axios.get(`${BASE_URL}/lessons/${lessonId}`);
    return response.data; // Return the lesson details
  } catch (error) {
    console.error('Error fetching lesson details:', error);
    throw error;
  }
};
