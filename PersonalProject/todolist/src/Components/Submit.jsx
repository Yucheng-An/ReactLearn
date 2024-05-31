import react from 'react';
import '../App.css';
import { useState } from 'react'


function Submit(props){

    const handleSubmit = (event) => {
        event.preventDefault()
        const task = props.newTask
        const id = props.currentList.length + 1
        const newTask = {
            id: id,
            title: task,
            completed: false
        }
        props.list.push(newTask)
        console.log(props.list)
        props.setCurrentList(props.list)

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