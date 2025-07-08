import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      taskDate: date,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedEmployees = userData.employees.map(emp => {
      if (emp.name === assign) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskCount: {
            ...emp.taskCount,
            newTask: emp.taskCount.newTask + 1,
          },
        };
      }
      return emp;
    });

    const updatedUserData = {
      ...userData,
      employees: updatedEmployees,
    };

    setUserData(updatedUserData);

    // Clear input fields
    setTitle("");
    setAssign("");
    setCategory("");
    setDescription("");
    setDate("");
  };

const handleExportData = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];

  const data = { employees, admin };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "exportedData.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

  return (
    <div>
      <form onSubmit={submitHandler} className="flex w-full px-2 font-medium flex-wrap items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-xl">Task Title</h3>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-[80%] p-2 border border-gray-500 rounded" type="text" placeholder="your task title here" />
          </div>
          <div>
            <h3>Date</h3>
            <input value={date} onChange={(e) => setDate(e.target.value)} className="w-[40%] p-2 border border-gray-500 rounded" type="date" />
          </div>
          <div>
  <h3>Assign to</h3>
  <select
    value={assign}
    onChange={(e) => setAssign(e.target.value)}
    className="w-[80%] p-2 border border-gray-500 rounded"
  >
    <option value="" disabled>Select an employee</option>
    {userData.employees.map((emp) => (
      <option key={emp.id} value={emp.name}>
        {emp.name}
      </option>
    ))}
  </select>
</div>
          <div>
            <h3>Category</h3>
            <input value={category} onChange={(e) => setCategory(e.target.value)} className="w-[80%] p-2 border border-gray-500 rounded" type="text" placeholder="design, dev, etc." />
          </div>
        </div>
        <div className="w-1/2">
          <h3>Description:</h3>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-[80%] p-2 border border-gray-500 rounded" rows="10"></textarea>
        </div>
        <div className='mt-5 w-full justify-center gap-5 flex items-center'>
          <button type='submit' className='w-[20%] bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-400 hover:to-teal-400 font-medium p-2 cursor-pointer rounded'>Create Task</button>
          <button onClick={handleExportData} className="w-[20%] bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 font-medium p-2 cursor-pointer rounded">Export Data</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
