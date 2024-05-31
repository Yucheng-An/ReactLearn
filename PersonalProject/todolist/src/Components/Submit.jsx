import react from 'react';
import '../App.css';
import { useState } from 'react'


function Submit(props){

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("the new task is:")
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

    return (
        <form onSubmit={handleSubmit} onChange={onChange}>
            <input type="text" placeholder="Add a new task" />
            <button type="submit">Add</button>
        </form>
    )
}


export default Submit;