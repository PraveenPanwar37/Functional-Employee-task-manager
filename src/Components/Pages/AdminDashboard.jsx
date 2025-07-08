import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllEmployees from "../others/AllEmployees";

const AdminDashboard = ({data, changeUser}) => {
  return (
    <div>
      <Header data={data} changeUser={changeUser}/>
      <CreateTask/>
      <AllEmployees/>
    </div>
  );
};

export default AdminDashboard;
