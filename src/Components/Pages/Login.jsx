import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const SubmitHandler = (e) => {
    e.preventDefault()
    handleLogin(username, password)
    setUsername("")
    setPassword("")
  }

  return (
    <div className='mt-22'>
      <div className='header'>
      <h1 className='text-4xl font-bold text-center text-black'>Employ Task Manager</h1>
      <p className='text-center text-gray-800 mt-2'>"Your Workday Partener"</p>
      </div>
      <div className='login-form mt-10'>
        <h2 className='text-teal-800 text-center font-bold text-2xl underline'>Enter your credentials to sign in</h2>
        <form onSubmit={(e)=> {
            SubmitHandler(e)
        }}>
          <div className='mt-10 w-[40%] mx-auto'>
            <label className='block text-black'>Employ ID:</label>
            <input onChange={(e)=>
              setUsername(e.target.value)
            } value={username} required type='username' className='w-full p-2 border border-gray-500 rounded' placeholder='Enter your email' />
          </div>
          <div className='mt-6 w-[40%] mx-auto'>
            <label className='block text-black'>Password:</label>
            <input onChange={(e)=>{
              setPassword(e.target.value)
            }} value={password} required type='password' className='w-full p-2 border border-gray-500 rounded' placeholder='Enter your password' />
          </div>
          <div className='mt-8 w-[20%] mx-auto flex justify-between items-center'>
          <button type='submit' className='w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 font-medium hover:text-white p-2 cursor-pointer rounded'>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login