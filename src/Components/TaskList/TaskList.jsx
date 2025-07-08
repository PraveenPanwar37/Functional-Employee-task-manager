import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className='h-[55%] font-medium overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5 rounded-md bg-zinc-100 mt-8'>
        {data.tasks.map((elem, index)=>{
          if(elem.active){
            return <AcceptTask key={index} data={elem}/>
          }
          if(elem.completed){
            return <CompleteTask key={index} data={elem}/>
          }
          if(elem.newTask){
            return <NewTask key={index} data={elem}/>
          }
          if(elem.failed){
            return <FailedTask key={index} data={elem}/>
          }
        })}
    </div>
  )
}

export default TaskList