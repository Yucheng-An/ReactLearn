import react from'react';
import '../App.css';

function Display(props){
    return (
    <div id = "center-container">
        <ul id = "ulBox">
            {props.currentList.map((item) => (
                <input></input>
                <p id = "task" key={item.id}>{item.title}</p>
            ))}
        </ul>
    </div>
)
}


export default Display