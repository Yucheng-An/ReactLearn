import react from'react';
import '../App.css';

function Display(props){
    return (
    <div id = "center-container">
        <div id = "ulBox">
            {props.currentList.map((item) => (
                <input key={item.id}>
                <p id = "task" key={item.id}>{item.title}</p>
                </input>
            ))}
        </div>
    </div>
)
}


export default Display