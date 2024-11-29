import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    const newUser = { username };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser)); // Persist user data
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear persisted data
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
