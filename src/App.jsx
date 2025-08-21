import React, { useContext, useEffect, useState } from "react";
import MainBG from "./Components/Pages/MainBG";
import Login from "./Components/Pages/Login";
import EmployeeDashboard from "./Components/Pages/EmployeeDashboard";
import AdminDashboard from "./Components/Pages/AdminDashboard";
import { AuthContext } from "./Context/AuthProvider";
import { setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggeInUserData, setLoggeInUserData] = useState(null);
  const authData = useContext(AuthContext);

  if (!localStorage.getItem("employees")) {
    setLocalStorage();
  }
  localStorage.clear(); 

  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggeInUserData(userData.data);
    }
  }, []);

  const handleLogin = (username, password) => {
    if (authData.loading) {
      alert("Please wait, data is still loading.");
      return;
    }

    if (username === "praveen@admin" && password === "123") {
      setUser("admin");
      const admin = authData?.userData?.admin?.find(
        (e) => username === e.username && password === e.password
      );
      setLoggeInUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin })
      );
      return;
    }

    const employees = authData?.userData?.employees || [];
    const employee = employees.find(
      (e) =>
        username.trim().toLowerCase() === e.username.toLowerCase() &&
        password.trim() === e.password
    );
    if (employee) {
      setUser("employee");
      setLoggeInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
    } else {
      alert("Invalid Credentials");
    }
  };
  
  if (authData.loading) {
    return <div className="text-white text-center mt-20">Loading data...</div>;
  }

  return (
    <div className="mainBackground relative w-full h-screen bg-zinc-700">
      <MainBG />
      <div className="absolute z-[50] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90%] h-[90%] bg-white opacity-65 border-1 border-zinc-600 rounded-md p-2">
        {/* Pages Will start from here */}
        {!user ? <Login handleLogin={handleLogin} /> : ""}
        {user == "admin" ? (
          <AdminDashboard data={loggeInUserData} changeUser={setUser} />
        ) : (
          ""
        )}
        {user == "employee" ? (
          <EmployeeDashboard data={loggeInUserData} changeUser={setUser} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
