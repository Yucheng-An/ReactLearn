import react from 'react';
import usestae
export default function Player({name,symbol}) {




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