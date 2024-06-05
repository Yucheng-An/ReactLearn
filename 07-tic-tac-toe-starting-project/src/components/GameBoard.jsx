import {useState} from "react";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]



export default function GameBoard(){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            prevGameBoard[rowIndex][colIndex] = "X";
            return updatedGameBoard;
        })
    }

    return <ol id="game-board">
        {initialGameBoard.map((row,rowIndex) =>
            <li key = {rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex) => <li key = {colIndex}>
                    <button onClick = {() => handleSelectSquare}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>

}