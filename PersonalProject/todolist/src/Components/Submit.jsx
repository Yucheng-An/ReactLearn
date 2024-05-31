import react from 'react';
import '../App.css';


function Submit(props){
    return (
        <form onClick={handleSubmit}>
            <input type="text" placeholder="Add a new task" />
            <button type="submit">Add</button>
        </form>
    )
}


export default Submit;