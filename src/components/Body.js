
import { useState, useEffect } from 'react'
import GameList from './GameList';
import Searchbar from './Searchbar';
import Randomizer from './Randomizer';

import {Container,Row, Col, Card} from 'react-bootstrap'

const Body = () => {
   
    const [games, setGames] = useState([]);
    const [search, setSearch]= useState("");


    useEffect(() => {
        fetch("http://localhost:9292/games")
          .then((r) => r.json())
          .then((games) => setGames(games));
      }, []);

      function deleteItem(id) {
        const deleteItem = games.filter(game => game.id !== id)
        setGames(deleteItem)
    }
      
    return (
        <div>
            <Searchbar setSearch={setSearch}/>
            <h1>Game List </h1>
            {games.map(game => (
                <>
                <Randomizer 
                game={game}
                deleteItem={deleteItem}
                />
       
                <Container>
                    <GameList 
                    game={game}
                    deleteItem={deleteItem}
                    />
                </Container>
                </>
            ))}
        </div>
    )
}

export default Body
