import react from 'react';
import '../App.css';
import { useState } from 'react'


function Submit(props){   const handleSubmit = (event) => {
    event.preventDefault()
    const task = event.target.value.text
    const id = currentList.length + 1
    const newTask = {
        id: id,
        title: task,
        completed: false
    }
    list.push(newTask)
    setCurrentList(list)
}
    const onChange = (event) => {
        console.log(event.target.value)
    }
    return (
        <form onSubmit={props.handleSubmit} onChange={onChange}>
            <input type="text" placeholder="Add a new task" />
            <button type="submit">Add</button>
        </form>
    )
}


export default Submit;