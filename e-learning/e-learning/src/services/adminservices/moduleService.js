import axios from "axios";

const moduleService = {
  getModulesByCourseId: async (courseId) => {
    try {
      const response = await axios.get(`http://localhost:8080/enrollments/modules/${courseId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching modules:", error);
      throw error;
    }
  },
};

export default moduleService;