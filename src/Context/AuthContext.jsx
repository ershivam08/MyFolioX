import React, { createContext, useState, useContext } from "react";

// Create authentication context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function (fake authentication)
  const login = (email, password) => {
    if (email && password) {
      setUser({ email });
      console.log("User logged in:", email);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    console.log("User logged out");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for consuming auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
