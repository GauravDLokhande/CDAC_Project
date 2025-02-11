import { createContext, useState, useEffect } from "react";
import loginService from "../services/loginService";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUser = loginService.getCurrentUser();
    const storedToken = loginService.getAuthToken();

    if (storedToken && storedUser) {
      setUser(storedUser);
      setToken(storedToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }
  }, []);

  const login = async (email, password) => {
    try {
      const data = await loginService.login(email, password);
      setUser(data.user);
      setToken(data.token);
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    loginService.logout();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
