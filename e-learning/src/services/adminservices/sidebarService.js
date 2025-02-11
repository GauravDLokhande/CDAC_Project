import axios from 'axios';

// Base URL for the API
const API_URL = 'http://localhost:8080'; // Your backend URL

// Function to fetch the list of modules for a particular course
export const fetchModules = async (courseId) => {
  try {
    const response = await axios.get(`${API_URL}/enrollments/modules/${courseId}`);
    return response.data; // Return modules data
  } catch (error) {
    console.error('Error fetching modules:', error);
    throw error; // Throw error to handle it in the component
  }
};

// Function to fetch lessons for a particular module
export const fetchLessonsByModule = async (moduleId) => {
  try {
    const response = await axios.get(`${API_URL}/modules/lessons/${moduleId}`);
    return response.data; // Return lessons data
  } catch (error) {
    console.error(`Error fetching lessons for module ${moduleId}:`, error);
    throw error; // Throw error to handle it in the component
  }
};
