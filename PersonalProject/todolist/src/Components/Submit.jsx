import react from 'react';
import '../App.css';
import { useState } from 'react'


function Submit(props){
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