import react from 'react';
import '../App.css';
import { useState } from 'react'


function Submit(props){
    const on
    return (
        <form onClick={props.handleSubmit}>
            <input type="text" placeholder="Add a new task" />
            <button type="submit">Add</button>
        </form>
    )
}


export default Submit;