import react from 'react';
import '../App.css';


function Submit(props){
    const onChanege = (event) => {
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
    return (
        <form onClick={props.handleSubmit}>
            <input type="text" placeholder="Add a new task" />
            <button type="submit">Add</button>
        </form>
    )
}


export default Submit;