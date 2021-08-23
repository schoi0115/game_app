
import { useState, useEffect } from 'react'

const Body = () => {
   
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/games")
          .then((r) => r.json())
          .then((games) => setGames(games));
      }, []);
      
    return (
        <div>
            <h1>Game List </h1>
            {games.map(game => (
                game.name
            ))}
        </div>
    )
}

export default Body
