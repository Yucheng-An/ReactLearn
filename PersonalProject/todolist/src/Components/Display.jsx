import react from'react';
import '../App.css';

function Display(props){
    return (
    <div id = "center-container">
        <div id = "ulBox">
            {props.currentList.map((item) => (
                <p id = "task" key={item.id}><input key={item.id} type="checkbox"/>{item.title}</p>
            ))}
        </div>
    </div>
)
}


export default Display