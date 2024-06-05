const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]


export default function GameBoard({onSelectSquare, turns}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    //
    // function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     })
    //     onSelectSquare();
    // }

    return <ol id="game-board">
        {initialGameBoard.map((row, rowIndex) =>
            <li key = {rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex) => <li key = {colIndex}>
                    <button onClick = {() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>

}