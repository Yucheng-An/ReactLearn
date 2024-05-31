import react from 'react';
import '../App.css';
import { useState } from 'react'


function Submit(props){

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("the new task is:", event.target.value.text)
        const task = event.target.value
        const id = props.currentList.length + 1
        const newTask = {
            id: id,
            title: task,
            completed: false
        }
        props.list.push(newTask)
        props.setCurrentList(props.list)
        console.log(props.list)
    }
    
    const handleOnChange = (event) => {
        props.setNewTask(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a new task" onChange={handleOnChange}/>
            <button type="submit">Add</button>
        </form>
    )
}


export default Submit;