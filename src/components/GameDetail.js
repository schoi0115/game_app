import { useEffect, useState } from 'react';
import GameContainer from "./GameContainer";

function GameDetail() {

    const [games, setGames] = useState([]);
  
    useEffect(() => {
        fetch("http://localhost:9292/games")
          .then(res => res.json())
          .then(setGames);
      }, []);
  
  
    return (
      <div>
        <h1>
              Game App homepage
        </h1>
        <button>
            Game data
        {games.map ((game) => {
            return (
            <GameContainer
                key ={game.id}
                game ={game}
            />
            )
        })}
        </button>
      </div>
    )
  }

  export default GameDetail