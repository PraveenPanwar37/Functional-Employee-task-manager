import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'


const AllEmployees = () => {
const authData = useContext(AuthContext)

  return (
    <div className='bg-[#cac8c8] p-5 mt-2 rounded-sm h-58 font-medium'>
      <div className='bg-gradient-to-r from-red-400 to-orange-400 mb-1 py-2 font-bold px-4 flex justify-between'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed</h5>
            <h5 className='w-1/5'>Failed</h5>
        </div>
      <div className='h-[80%] overflow-auto' id='AllEmployees'>
        {authData.userData.employees.map((elem, index)=>{
        return <div key={index} className='mb-1 py-2 px-4 flex justify-between border border-zinc-400 rounded'>
            <h2 className='w-1/5'>{elem.name}</h2>
            <h3 className='w-1/5 text-teal-800'>{elem.taskCount.newTask}</h3>
            <h5 className='w-1/5 text-blue-800' >{elem.taskCount.active}</h5>
            <h5 className='w-1/5 text-green-800'>{elem.taskCount.completed}</h5>
            <h5 className='w-1/5 text-red-800 '>{elem.taskCount.failed}</h5>
        </div>
      })}
      </div>
    </div>
  )
}

export default AllEmployees