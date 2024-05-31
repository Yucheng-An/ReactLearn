import react from'react';
import '../App.css';

function Display(props){
    return (
    <div id="tab-content">
        <ul>
            {props.currentList.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
)
}


export default Display