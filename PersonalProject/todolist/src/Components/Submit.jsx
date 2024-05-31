import axios from"axios";
import Button from '@mui/material/Button';
import React from 'react';
import Input from '@mui/material/Input';
function randomId(){
    return Math.floor(Math.random()*10000)
}

function Submit(props){

    const handleSubmit = (event) => {
        event.preventDefault()
        if (props.newTask === null){
            return null
        }
        const task = props.newTask
        const id = randomId()
        const date = new Date()
        const newTask = {
            id: id,
            title: task,
            date : date,
            completed: false
        }
        axios.post("http://localhost:3001/todolist", newTask).then((response) =>{
            if(response.status === 201){
                console.log("Task added")
                props.currentList.push(newTask)
                console.log(props.currentList)
                props.setCurrentList(props.currentList)
                props.setNewTask(null)
            }else{
                console.log("Task not added")
            }
        })
    }
    
    const handleOnChange = (event) => {
        props.setNewTask(event.target.value)
    }

    return (
        <form id = "submitForm" onSubmit={handleSubmit}>
            <textarea id= "inputBox" placeholder="Add a new task" onChange={handleOnChange}/>
            <Button id = "submitButton" type="submit">Add</Button>
        </form>
    )
}


export default Submit;