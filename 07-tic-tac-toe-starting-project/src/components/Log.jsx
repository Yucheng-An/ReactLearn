


export default function Log({turns}){

    return (
        <ol id = "log">
            {turns.map((turn,index)) => <li key = {index}> </li>
        </ol>
    )
}