
import { useState, useEffect } from 'react'
import GameList from './GameList';
import Searchbar from './Searchbar';
import Randomizer from './Randomizer';

import {Container,Row, Col, Card} from 'react-bootstrap'

const Body = () => {
   
    const [games, setGames] = useState([]);
    const [search, setSearch]= useState("");

    const [name, setName] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [price, setPrice] = useState("");


    useEffect(() => {
        fetch("http://localhost:9292/games")
          .then((r) => r.json())
          .then((games) => setGames(games));
      }, []);

      function deleteItem(id) {
        const deleteItem = games.filter(game => game.id !== id)
        setGames(deleteItem)
    }

    function onAddGame(newGame) {
        const updatedGameArray = [...games, newGame];
        setGames(updatedGameArray);
      }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            releaseDate: releaseDate,
            price: price,
        }),
        })
        .then((r) => r.json())
        .then((newGame) => onAddGame(newGame));
    }
      
    return (
        <div>
            <Searchbar setSearch={setSearch}/>
            <div>
                <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Game title"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input
                type="text"
                placeholder="Price"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
                />
                <input
                type="number"
                placeholder="Date"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
                <button type="submit" >Save</button>
                </form>
            </div>
            <h1>Game List </h1>
            {games.map(game => (
                <>
                <Randomizer 
                game={game}
                deleteItem={deleteItem}
                />
       
                <Container>

                {games.map(game => (
                    <GameList 
                    game={game}
                    deleteItem={deleteItem}
                    setGame={setGames}
                    />
                    ))}
                    
                </Container>
                </>
            ))}
        </div>
    )
}

export default Body
