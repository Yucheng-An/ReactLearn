import react from'react';
import '../App.css';

function Display(props){
    return (
    <div id = "center-container">
        <ul id = "ulBox">
            {props.currentList.map((item) => (
                <id = "task" key={item.id}>{item.title}</input>
            ))}
        </ul>
    </div>
)
}


export default Display