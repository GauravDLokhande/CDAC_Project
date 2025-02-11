import axios from "axios";

const BASE_URL = "http://localhost:8080/admin/courses";

const adminCourseService = {
  getCourses: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data; // Return the courses data
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw error;
    }
  },
};

export default adminCourseService;
