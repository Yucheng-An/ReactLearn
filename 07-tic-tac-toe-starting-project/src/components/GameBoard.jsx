const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]



export default function GameBoard(){
    return (
        <ol id="game-board">
            {initialGameBoard.map(row, rowIndex) => {
                <li></li>xxx
            }}

        </ol>
    )
}