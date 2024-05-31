import react from 'react';
import '../App.css';
import { useState } from 'react'


function Submit(props){

    const handleSubmit = (event) => {
        event.preventDefault()
        const task = event.target.value.text
        const id = props.currentList.length + 1
        const newTask = {
            id: id,
            title: task,
            completed: false
        }
        props.list.push(newTask)
        props.setCurrentList(props.list)
    }
    const onChange = (event) => {
        console.log(event.target.value)
    }
    return (
        <form onSubmit={handleSubmit} onChange={onChange}>
            <input type="text" placeholder="Add a new task" />
            <button type="submit">Add</button>
        </form>
    )
}


export default Submit;