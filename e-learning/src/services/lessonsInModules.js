// src/services/lessonsInModules.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/modules/lessons/';

export const fetchLessons = async (moduleId) => {
  try {
    const response = await axios.get(`${API_URL}${moduleId}`);
    return response.data; // Return the lessons data
  } catch (error) {
    console.error('Error fetching lessons:', error);
    throw error; // Re-throw the error so that it can be handled in the component
  }
};
