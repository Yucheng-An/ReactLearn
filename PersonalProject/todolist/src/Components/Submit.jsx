import '../App.css';
import axios from"axios";

function randomId(){
    return Math.floor(Math.random()*10000)
}

function Submit(props){

    const handleSubmit = (event) => {
        event.preventDefault()
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
            <input id= "inputBox" type="text" placeholder="Add a new task" onChange={handleOnChange}/>
            <button type="submit">Add</button>

            <label>
                <input type="checkbox" name="subscribe" value="yes">
                    Subscribe to newsletter
            </label>
        </form>
    )
}


export default Submit;