import '../App.css';
import axios from"axios";

function randomId(){}

function Submit(props){

    const handleSubmit = (event) => {
        event.preventDefault()
        const task = props.newTask
        const id =
        const newTask = {
            id: id,
            title: task,
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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a new task" onChange={handleOnChange}/>
            <button type="submit">Add</button>
        </form>
    )
}


export default Submit;