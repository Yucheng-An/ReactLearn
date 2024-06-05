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

            prevGameBoard[rowIndex][colIndex] = "X";
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