import '../App.css';
import axios from"axios";


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
        axios.post("http://localhost:3001/todolist")
        props.currentList.push(newTask)
        console.log(props.currentList)
        props.setCurrentList(props.currentList)
        props.setNewTask(null)
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