import axios from "axios";

const API_URL = "http://localhost:8080/admin/students";

const getStudents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

export default { getStudents };