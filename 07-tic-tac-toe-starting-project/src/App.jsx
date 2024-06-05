import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import {useState} from "react";


function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSelectSquare(rowIndex,colIndex){
        setActivePlayer((currentActivePlayer) => (currentActivePlayer === 'X' ? 'O' : 'X'));
    }

  return (
      <main>
        <div id = "game-container">
            <ol id="players" className = "highlight-player">
               <Player initialName="Player 1" symbol="X" isActive={activePlayer }/>
                <Player initialName="Player 2" symbol="O"/>
            </ol>
            <GameBoard onSelectSquare={handleSelectSquare}/>
        </div>
      </main>
  )
}


export default App
