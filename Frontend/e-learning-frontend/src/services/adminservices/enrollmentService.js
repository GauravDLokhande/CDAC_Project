import axios from "axios";

const API_URL = "http://localhost:8080/enrollments";

const getEnrolledCourses = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("User not authenticated");

    const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decoding JWT payload
    const studentId = decodedToken.user_id; // Extract studentId

    const response = await axios.get(`${API_URL}/${studentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // Array of enrolled courses
  } catch (error) {
    console.error("Error fetching enrolled courses:", error);
    return [];
  }
};

export default { getEnrolledCourses };
