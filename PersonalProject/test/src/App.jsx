import { useState } from 'react'


function App() {
   const handleTaskSubmit = (event) =>{
        event.preventDefault()
       console.log("Task Submitted")
       console.log(event.target[1].value)
   }
  return (
    <div>
        <form onSubmit={handleTaskSubmit}>
            <input type="text" placeholder="Enter a task"/>
            <input type="data" placeholder="Enter a date"/>
            <button type="submit">Add Task</button>
        </form>
    </div>
  )
}

export default App
