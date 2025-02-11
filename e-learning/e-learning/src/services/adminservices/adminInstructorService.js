// src/services/adminInstructorService.js
import axios from "axios";

const API_URL = "http://localhost:8080/admin/instructors";

const getInstructors = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Assuming the API returns an array of instructors
  } catch (error) {
    console.error("Error fetching instructors:", error);
    throw error;
  }
};

export default {
  getInstructors,
};
