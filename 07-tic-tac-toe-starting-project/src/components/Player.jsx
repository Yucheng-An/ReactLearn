import react, {useState} from 'react';
import {useState}from 'react';


export default function Player({name,symbol}) {
    const [idEditing, setIdEditing] = useState()



    return (
        <li>
            <span className="player">
                <span className="player-name">{name}</span>
                <span className="player-symbol">{symbol}</span>
            </span>
            <button>Edit</button>
        </li>

    )
}