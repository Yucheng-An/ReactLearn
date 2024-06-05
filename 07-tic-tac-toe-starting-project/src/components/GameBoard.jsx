import {useState} from "react";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]



export default function GameBoard(){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSqueare(rowIndex,colIndex){
        setGameBoard((prevGameBoard) => {
            const newState = [...prevGameBoard];
            newState[0] = [...prevState[0]];
            newState[0][0] = 'X';
            return newState;
        })
    }

    return <ol id="game-board">
        {initialGameBoard.map((row,rowIndex) =>
            <li key = {rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex) => <li key = {colIndex}>
                    <button>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>

}