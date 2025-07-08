import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between'>
                <h4 className='text-sm'>{data.taskDate}</h4>
                <span className='text-xs whitespace-nowrap'>failed</span>
                <h3 className='bg-red-500 px-3 py-1 text-sm rounded-2xl'>{data.category}</h3>
            </div>
            <h2 className='mt-5 text-xl font-semibold capitalize'>{data.title}</h2>
            <p className='text-sm font-normal mt-1'>
                {data.description}
            </p>
               <div className='flex justify-between mt-4'>
                <button className='bg-teal-400 py-1 capitalize px-2 text-sm rounded cursor-pointer'>Complete</button>
            </div>
        </div>
  )
}

export default FailedTask