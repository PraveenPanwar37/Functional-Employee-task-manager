import React from 'react'
import TaskListNumber from './TaskListNumber'

const Header = ({data, changeUser}) => {

  const logOutUser = ()=> {
    localStorage.setItem('loggedInUser', '')
    changeUser("")
    // window.location.reload()
  }

  return (
    <div>
        <div className='header p-3 flex items-center justify-between flex-wrap'>
      <h1 className='text-2xl font-bold text-black'>Employ Task Manager
      </h1>
      <button onClick={logOutUser} className='cursor-pointer px-4 py-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 font-medium mr-8'>Log out</button>
      </div>
  {/*  */}
    </div>
  )
}

export default Header