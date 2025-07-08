import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear() 
  const localData = getLocalStorage();
const [userData, setUserData] = useState({
    employees: localData.employees,
    admin: localData.admin,
  });


// useEffect(() => {
//   setLocalStorage()
//   const {employees, admin} = getLocalStorage()
//   setUserData({employees,admin})

// }, [])

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(userData.employees));
    localStorage.setItem("admin", JSON.stringify(userData.admin));
  }, [userData]);







  return (
    <div>
        <AuthContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider