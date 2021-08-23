
import { useState, useEffect } from 'react'
import GameList from './GameList';
import Searchbar from './Searchbar';
import Randomizer from './Randomizer';
import 'bootstrap/dist/css/bootstrap.css'
import {Container,Row, Col, Card} from 'react-bootstrap'

const Body = () => {
   
    const [games, setGames] = useState([]);
    const [search, setSearch]= useState("");


    useEffect(() => {
        fetch("http://localhost:9292/games")
          .then((r) => r.json())
          .then((games) => setGames(games));
      }, []);
      
    return (
        <div>
            <Searchbar setSearch={setSearch}/>
            <h1>Game List </h1>
            {games.map(game => (
                <>
                {/* <Randomizer game={game}/> */}
                <Container>
              
                         <GameList game={game} />
                      
                </Container>
                </>
            ))}
        </div>
    )
}

export default Body
