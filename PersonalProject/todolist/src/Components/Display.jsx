import react from'react';
import '../App.css';

function Display(){
return (
    <div id="core-concepts">
        <ul>
            {currentList.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
)
}


export default Display