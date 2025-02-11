import axios from 'axios';

const API_URL = "http://localhost:8080/admin";

const deleteUser = (userId) => {
  return axios.put(`${API_URL}/deleteUser/${userId}`);
};

const addInstructor = (instructorData) => {
  return axios.post(`${API_URL}/add-instructor`, instructorData);
};

const addCourse = (courseData) => {
  return axios.post(`${API_URL}/add-course`, courseData);
};

const adminService = {
  deleteUser,
  addInstructor,
  addCourse,
};

export default adminService;
