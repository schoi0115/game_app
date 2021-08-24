import React from 'react'
import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
import {Container,Row, Col, Card} from 'react-bootstrap'



const GameList = ({game, setGames, deleteItem, onUpdateGame}) => {

  const [updatedName, setUpdatedName] = useState("");
  const [upDatedReleaseDate, setUpdatedReleaseDate] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [updateImage, setupdateImage] = useState("");
  const [updateUpdateGenre, setUpdateUpdateGenre] = useState("");
  


  function handleDeleteClick() {
    fetch(`http://localhost:9292/games/${game.id}`, {
      method: "DELETE",
    });
    deleteItem(game.id);
  }


  function handleGameFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/games/${game.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        name: updatedName,
        release_date: upDatedReleaseDate,
        price: updatedPrice,
        image: updateImage, 
        genre: updateUpdateGenre
    }),
    })
      .then((r) => r.json())
      .then((newGame) => {onUpdateGame(newGame);
      });
  }


    return (

      <div>
      <h3>{game.name}</h3>
      <h3>{game.release_date}</h3>
      <h3>{game.price}</h3>
      <h3>{game.genre}</h3>
      <img src={game.image}></img>

                  <button onClick={handleDeleteClick}>Delete</button>
                  <form onSubmit={handleGameFormSubmit}>
                  <input
                  type="text"
                  placeholder="Game title"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  />
                  <input
                  type="text"
                  placeholder="Price"
                  value={upDatedReleaseDate}
                  onChange={(e) => setUpdatedReleaseDate(e.target.value)}
                  />
                  <input
                  type="number"
                  placeholder="Date"
                  value={updatedPrice}
                  onChange={(e) => setUpdatedPrice(e.target.value)}
                  />
                  <input
                  type="string"
                  placeholder="Image"
                  value={updateImage}
                  onChange={(e) => setupdateImage(e.target.value)}
                  />
                     <input
                  type="string"
                  placeholder="Genre"
                  value={updateUpdateGenre}
                  onChange={(e) => setUpdateUpdateGenre(e.target.value)}
                  />
                  <button type="submit" >Save</button>
                </form>
      </div>
       
      //    <Card style={{ width: '18rem' }}>
      //    <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/video-game-controller-doodle-hand-drawn-vector-illustration-63395075.jpg" />
      //    <Card.Body>
      //      <Card.Title>{game.name}</Card.Title>
      //      <Card.Text>
          
      //      </Card.Text>
      //    </Card.Body>
      //  </Card>
        
    )
}

export default GameList
