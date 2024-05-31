import react from'react';
import '../App.css';

function Display(props){
    return (
    <div id = "center-container">
        <div id = "ulBox">
            {props.currentList.map((item) => (
                <p id = "task" key={item.id}>
                    {item.title}<button>done!</button>
                </p>
            ))}
        </div>
    </div>
)
}


export default Display