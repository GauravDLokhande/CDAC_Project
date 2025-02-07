import axios from "axios";

const API_URL = "http://localhost:8080/users/signin"; // Update this if needed

const login = async (email, password) => {
  try {
    const response = await axios.post(API_URL, { email, password });

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Set Authorization Header for all requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
    }

    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  delete axios.defaults.headers.common["Authorization"];
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getAuthToken = () => {
  return localStorage.getItem("token");
};

// Apply stored token if available on page reload
const token = getAuthToken();
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default { login, logout, getCurrentUser, getAuthToken };
