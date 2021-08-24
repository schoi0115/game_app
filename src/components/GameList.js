import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Container,Row, Col, Card} from 'react-bootstrap'



const GameList = ({game, setGames, deleteItem, onUpdateGame}) => {

  const [updatedName, setUpdatedName] = useState("");
  const [upDatedReleaseDate, setUpdatedReleaseDate] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");
  


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
    }),
    })
      .then((r) => r.json())
      .then((newGame) => {onUpdateGame(newGame);
      });
  }


    return (
       
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/video-game-controller-doodle-hand-drawn-vector-illustration-63395075.jpg" />
         <Card.Body>
           <Card.Title>{game.name}</Card.Title>
           <Card.Text>
                <li>Release date: {game.release_date}</li>
                <li>Price: {game.price}</li>
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
                  <button type="submit" >Save</button>
                </form>
           </Card.Text>
         </Card.Body>
       </Card>
        
    )
}

export default GameList
