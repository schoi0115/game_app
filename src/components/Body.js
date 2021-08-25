
import { useState, useEffect } from 'react'
import GameList from './GameList';
import Randomizer from './Randomizer';

const Body = () => {
   
    const [games, setGames] = useState([]);
    const [name, setName] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");
    const [loging, setLoging] = useState(false)

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
            release_date: releaseDate,
            price: price,
            image: image,
            genre: genre
        }),
        })
        .then((r) => r.json())
        .then((newGame) => onAddGame(newGame));
    }

    function onUpdateGame(updatedGame) {
        const updatedGamesArray = games.map((game) => {
          if (game.id === updatedGame.id) {
            return updatedGame;
          } else {
            return game;
          }
        });
        setGames(updatedGamesArray);
      }
      function handleLogIn(e){
        e.preventDefault()
        console.log(e.target)
      }

      function logInPage(){
        setLoging(!loging)
      }
      function logOutPage(){
        setLoging(!loging)
      }

      
    return (
        <div>

        {loging? 
        (<div>
            
        <Randomizer/>
        <div className="logOut">
    <button className="logoutButton" onClick={logOutPage}>Log out</button>
      </div>
           <div>
                <form onSubmit={handleSubmit} className="centering">
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
                <input
                type="string"
                placeholder="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                />
                <input
                type="string"
                placeholder="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                </form>
                <div>
                <button type="submit">Save</button>
                </div>
            </div>
            <h1 className="centering">Game List </h1>
            <div className="cardTable">
            {games.map(game => (
                <div className="cardPadding">
                    <GameList 
                    key={games.id}

                    game={game}
                    deleteItem={deleteItem}
                    setGame={setGames}
                    onUpdateGame={onUpdateGame}
                    />
                    
                </div>
            ))}
            </div>
            </div>
             ) : (
    <div className="center">   
      <form onSubmit={handleLogIn}>
        <h1>Log In</h1>
        <div className="form-container">
          <label > Username </label>
          <input  className="bottom-spacing" placeholder = "ID ..."/>
          <label >Password</label>
          <input type="password" className="bottom-spacing-button" placeholder = "Password ..." />

            <div className="form-container">
              <button onClick={logInPage}>Log In</button>
            </div>
        </div>
      </form>
    </div>
    )}
        </div>
    )
}

export default Body
