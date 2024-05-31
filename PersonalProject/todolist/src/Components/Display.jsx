import react from'react';

function Display(props){
    return (
    <div id = "center-container">
        <div id = "ulBox">
            {props.currentList.map((item) => (
                <p id = "task" key={item.id}>
                    {item.title}
                    <button id = "doneButton" key={item.id}>done!</button>
                </p>
            ))}
        </div>
    </div>
)
}


export default Display