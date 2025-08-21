import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    employees: [],
  admin: [],
  });
  const [loading, setLoading] = useState(true); // NEW

  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
