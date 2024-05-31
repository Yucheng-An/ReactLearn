import react from 'react';
import '../App.css';


function Submit(props){
    const onChanege = (event) => {
        event.preventDefault()
    }
    return (
        <form onClick={props.handleSubmit}>
            <input type="text" placeholder="Add a new task" />
            <button type="submit">Add</button>
        </form>
    )
}


export default Submit;