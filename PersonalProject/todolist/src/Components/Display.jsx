import react from'react';
import '../App.css';

function Display(props){
    return (
    <div>
        <ul>
            {props.currentList.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
)
}


export default Display