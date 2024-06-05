const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]



export default function GameBoard(){
    return <ol id="game-board">
{initialGameBoard.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
                return <li key = {`${rowIndex}-${cellIndex}`} className="cell"></li>
            })
        })}
        </ol>

}